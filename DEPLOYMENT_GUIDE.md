# Panduan Deploy PanduCore ke Vercel

## 1. Upload ke GitHub

- Extract file ZIP.
- Masuk ke folder hasil extract.
- Pilih semua isi folder.
- Upload ke repository GitHub.
- Jangan upload ZIP mentah.
- Jangan upload folder pembungkusnya saja.

Repository harus terlihat seperti ini:

```
public/
assets/
scripts/
index.html
package.json
vercel.json
robots.txt
site.webmanifest
favicon.ico
README.md
```

Lalu buka folder `public` dan pastikan ada:

```
index.html
assets/
docs/
robots.txt
site.webmanifest
favicon.ico
```

## 2. Setting Vercel

Gunakan setting berikut:

```
Framework Preset: Other
Root Directory: ./
Install Command: kosongkan
Build Command: npm run build
Output Directory: public
```

## 3. Jika masih error

Cek tiga hal ini:

1. Folder `public` benar-benar ada di halaman utama repository.
2. `public/index.html` benar-benar ada.
3. Vercel Output Directory berisi `public`.

Jika sebelumnya pernah deploy gagal, klik Redeploy dan pilih Clear Build Cache.
