interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}