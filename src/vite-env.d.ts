/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL del Web App de Apps Script (VITE_… o URL_FORM vía vite.config). */
  readonly VITE_APPS_SCRIPT_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
