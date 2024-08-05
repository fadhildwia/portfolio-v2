declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENDPOINT: 'https://cloud.appwrite.io/v1',
      NEXT_PUBLIC_PROJECT_ID: '',
      NEXT_PUBLIC_DATABASE_ID: '',
      NEXT_PUBLIC_COLLECTION_PROFILE_ID: ''
    }
  }
}
export {};
