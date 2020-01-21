import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};






export type FirebaseUser = {
   __typename?: 'FirebaseUser',
  uid: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  photoURL?: Maybe<Scalars['String']>,
  permissions?: Maybe<Permissions>,
};

export type Permissions = {
   __typename?: 'Permissions',
  uid: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<FirebaseUser>,
  userById?: Maybe<FirebaseUser>,
  userByEmail?: Maybe<FirebaseUser>,
};


export type QueryUserByIdArgs = {
  id: Scalars['String']
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  FirebaseUser: ResolverTypeWrapper<FirebaseUser>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Permissions: ResolverTypeWrapper<Permissions>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  FirebaseUser: FirebaseUser,
  String: Scalars['String'],
  Permissions: Permissions,
  Boolean: Scalars['Boolean'],
};

export type PermissionsDirectiveResolver<Result, Parent, ContextType = any, Args = {   creds?: Maybe<Array<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {  }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FireCollectionDirectiveResolver<Result, Parent, ContextType = any, Args = {   name?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MongoCollectionDirectiveResolver<Result, Parent, ContextType = any, Args = {   name?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SqlCollectionDirectiveResolver<Result, Parent, ContextType = any, Args = {   name?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FirebaseUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['FirebaseUser'] = ResolversParentTypes['FirebaseUser']> = {
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  photoURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  permissions?: Resolver<Maybe<ResolversTypes['Permissions']>, ParentType, ContextType>,
};

export type PermissionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permissions'] = ResolversParentTypes['Permissions']> = {
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['FirebaseUser']>, ParentType, ContextType>,
  userById?: Resolver<Maybe<ResolversTypes['FirebaseUser']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>,
  userByEmail?: Resolver<Maybe<ResolversTypes['FirebaseUser']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>,
};

export type Resolvers<ContextType = any> = {
  FirebaseUser?: FirebaseUserResolvers<ContextType>,
  Permissions?: PermissionsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  permissions?: PermissionsDirectiveResolver<any, any, ContextType>,
  auth?: AuthDirectiveResolver<any, any, ContextType>,
  fireCollection?: FireCollectionDirectiveResolver<any, any, ContextType>,
  mongoCollection?: MongoCollectionDirectiveResolver<any, any, ContextType>,
  sqlCollection?: SqlCollectionDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;




import { firestore } from 'firebase-admin'

export type IFirebaseCollections = ReturnType<typeof firebaseCollectionFactory>;

export function firebaseCollectionFactory (db: firestore.Firestore) {
  const permissions = db.collection('permissions')

  return {
    permissions
  }
}



import { Db as MongoDb } from 'mongodb';
import { collectionCrud } from '@molonlabe/spartan-stores';

export type IMongoCollections = ReturnType<typeof mongoCollectionFactory>;

export function mongoCollectionFactory (db: MongoDb) {
  

  return {
    
  }
}
