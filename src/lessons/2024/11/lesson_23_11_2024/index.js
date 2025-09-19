const headers = {
    "date": new Date() + 0,
    "expires": new Date() + 1,
    "server": 'Express',
    "content-type": 'text/plain',
    "set-cookie": "SIDCC=AKEyXzUpxvxXxeMj8x_EPWX-f2q51DbsdKxflMZDmCT7FxMaOzYR61NeuPuMOptk_qLKKvaBKKBq; expires=Mon, 23-Feb-2026 13:55:55 GMT; path=/; domain=.google.com; priority=high"
}


const newHeaders = {
    ...headers,
    date: null,
}

