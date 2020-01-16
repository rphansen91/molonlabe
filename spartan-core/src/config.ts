export type IConfig = ReturnType<typeof buildServerConfig>;

export default function buildServerConfig() {
  return {
    port: Number(process.env.PORT) || 8080,
    about: {
      name: process.env.ABOUT_NAME || '',
      git: {
        url: process.env.ABOUT_GIT_URL || '',
        sha: process.env.ABOUT_GIT_SHA || '',
      },
    },
  };
}
