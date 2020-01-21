import {
  connect,
  MongoClient,
  MongoClientOptions,
  Collection,
  FilterQuery,
  UpdateQuery,
  FindOneAndUpdateOption,
} from 'mongodb';
import defaultsDeep from 'lodash/defaultsDeep';
import partial from 'lodash/partial';

const connections: { [url: string]: Promise<MongoClient> } = {};

export async function connectionCache(
  url: string,
  opts: MongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
  }
) {
  if (connections[url]) {
    const connection = await connections[url];
    if (connection.isConnected()) return connection;
  }
  connections[url] = connect(url, opts);
  const connection = await connections[url];
  return connection;
}

export async function findOne<V extends IWithDates>(
  collection: Collection<V>,
  query: FilterQuery<V>
) {
  return collection.findOne(query);
}

export async function find<V extends IWithDates>(
  collection: Collection<V>,
  query: FilterQuery<V>
) {
  return collection.find(query).toArray();
}

export async function page<V extends IWithDates>(
  collection: Collection<V>,
  query: FilterQuery<V>,
  { page = 1, perPage = 100 }: { page: number; perPage: number } = {
    page: 1,
    perPage: 100,
  }
) {
  const total = await collection.countDocuments(query);
  const data = await collection
    .find(query)
    .skip(perPage * (page - 1))
    .limit(perPage)
    .toArray();
  return {
    total,
    data,
    page,
  };
}

export async function insert<V extends IWithDates>(
  collection: Collection<V>,
  doc: Partial<V>
) {
  const date = new Date();
  const { ops } = await collection.insertOne(
    defaultsDeep(
      {
        updatedDate: date,
        createdDate: date,
        ...doc,
      },
      update
    )
  );
  return ops[0] || null;
}

export async function upsert<V extends IWithDates>(
  collection: Collection<V>,
  query: FilterQuery<V>,
  update: UpdateQuery<V>,
  options: FindOneAndUpdateOption = {}
) {
  const date = new Date();
  const { value } = await collection.findOneAndUpdate(
    query,
    defaultsDeep(
      {
        $set: {
          updatedDate: date,
        },
        $setOnInsert: {
          createdDate: date,
        },
      },
      update
    ),
    { returnOriginal: false, upsert: true, ...options }
  );
  return value || null;
}

export async function update<V extends IWithDates>(
  collection: Collection<V>,
  query: FilterQuery<V>,
  update: UpdateQuery<V>,
  options: FindOneAndUpdateOption = {}
) {
  const date = new Date();
  const { value } = await collection.findOneAndUpdate(
    query,
    defaultsDeep(
      {
        $set: {
          updatedDate: date,
        },
        $setOnInsert: {
          createdDate: date,
        },
      },
      update
    ),
    { returnOriginal: false, ...options }
  );
  return value || null;
}

export async function remove<V extends IWithDates>(
  collection: Collection<V>,
  query: FilterQuery<V>
) {
  const { value } = await collection.findOneAndDelete(query);
  return value || null;
}

export function collectionCrud<V extends IWithDates>(
  collection: Collection<V>
) {
  return {
    find: partial(find, collection),
    page: partial(page, collection),
    update: partial(update, collection),
    upsert: partial(upsert, collection),
    remove: partial(remove, collection),
  };
}

interface IWithDates {
  createdDate?: Date;
  updatedDate?: Date;
}
