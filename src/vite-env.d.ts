/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL del Web App de Apps Script (VITE_… o URL_FORM vía vite.config). */
  readonly VITE_APPS_SCRIPT_URL: string
  /** URL del Web App para registro de creadores UGC (VITE_… o URL_FORM_UGC vía vite.config). */
  readonly VITE_APPS_SCRIPT_URL_UGC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
