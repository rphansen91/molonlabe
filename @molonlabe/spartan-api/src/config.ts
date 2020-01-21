export type IConfig = ReturnType<typeof buildServerConfig>;

export default function buildServerConfig() {
  return {
    port: Number(process.env.PORT) || 8080,
    endpoint: process.env.ENDPOINT || '',
    about: {
      name: process.env.ABOUT_NAME || '',
      git: {
        url: process.env.ABOUT_GIT_URL || '',
        sha: process.env.ABOUT_GIT_SHA || '',
      },
    },
    mongo: {
      uri: process.env.MONGO_URI || '',
      name: process.env.MONGO_NAME || '',
    },
  };
}
