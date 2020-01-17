import { connect, MongoClient, MongoClientOptions } from 'mongodb';

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
