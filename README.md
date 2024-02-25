# What's Data-entry-apps?
Merupakan sebuah project data entry yang dapat di visualisasikan melalui diagram, chart. Terdapat berbagai fitur *Crud* seperti membuat data baru, mengedit, dan menghapus. semua data pengguna disimpan melalui database firebase, dan terdapat juga fitur login dan register melalui email atau authentification secara langsung dari google. 

# Tech Stack 
1) Programming Language
	- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

2) UI Framework
	- [TailwindCSS](https://tailwindcss.com/docs/installation)
	- [Vue 3](https://vuejs.org/)
	- [Tail Admin](https://tailadmin.com/)

3) Library 
	- [Formkit](https://formkit.com/)
	- [Vuefire](https://vuefire.vuejs.org/)
	- [vue-3-chart](https://vue-chart-3.netlify.app/)
	- [vue-router](https://router.vuejs.org/)
	- [Pinia](https://pinia.vuejs.org/)
	- [Axios](https://axios-http.com/)
4) Tools & Unit Test
	- [Vite](https://vitejs.dev/)
	- [Vitest](https://vitest.dev/)
	- [Eslint](https://eslint.org/docs/latest/use/getting-started)
	- [editorConfig](https://editorconfig.org/)
5) Database
	- [Firebase](https://firebase.google.com/)
6) Api
	  - [Data Indoensia](https://www.emsifa.com/api-wilayah-indonesia/)
	
# Functional feature list 'MVP'

### Register & login feature
- User dapat register melalui email, ataupun auth dari google secara langsung. 
- Terdapat form validation ketika register, dan vertifikasi dari email yang di daftarkan agar bisa mengakses & mengurangi bot/spam
- User dapat Login secara langsung ketika sudah register
- Terdapat fiture forgot password dan show password  
### Form 
- Admin/User dapat melakukan penginputan data karyawan berdasarkan name, age, and more. 
- Terdapat alerts ketika sukses melakukan input adata karyawan 
### Dashboard 
- Menampilkan total input admin
- Menampilkan total input all admin
- Visualisasi data donuts, berdasarkan status_karyawan
## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
