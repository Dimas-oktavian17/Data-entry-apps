### What's Data-entry-apps?
Merupakan sebuah project data entry yang dapat di visualisasikan melalui diagram, chart. Terdapat berbagai fitur *Crud* seperti membuat data baru, mengedit, dan menghapus. semua data pengguna disimpan melalui database firebase, dan terdapat juga fitur login dan register melalui email atau authentification secara langsung dari google. 

### Tech Stack 
1) **Programming Language**
	- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
	- [TypeScript](https://www.typescriptlang.org) 
2) **UI Framework**
	- [TailwindCSS](https://tailwindcss.com/docs/installation)
	- [Vue 3 | Compostion API](https://vuejs.org/)
	- [Tail Admin](https://tailadmin.com/)

3) **Library** 
	###### Chart & Visualizations
	- [jsvectormap](https://jvm-docs.vercel.app/)
	- [vue3-apexcharts](https://apexcharts.com/docs/vue-charts/)
	###### Forms Validation
	- [Formkit](https://formkit.com/)
	###### State Management & Routing
	- [Pinia](https://pinia.vuejs.org/)
	- [vue-router](https://router.vuejs.org/)
	###### Icon, & Utilities 
	- [iconify](https://iconify.design)
	- [VueUse](https://vueuse.org/)
	- [Vuefire](https://vuefire.vuejs.org/)
	###### Excel Converter
	- [vue-json-excel3](https://github.com/pratik227/vue3-json-excel.git)
4) **Tools & Unit Test**
	- [Vite](https://vitejs.dev/)
	- [Vitest](https://vitest.dev/)
	- [Eslint](https://eslint.org/docs/latest/use/getting-started)
	- [Axios](https://axios-http.com/)
	- [editorConfig](https://editorconfig.org/)
5) **Database**
	- [Firebase](https://firebase.google.com/)
6) **Api**
	  - [Data Indoensia](https://www.emsifa.com/api-wilayah-indonesia/)
	
### Folder Structure
	Data-Entry-Apps
	├── .editorconfig
	├── .gitignore
	├── index.html
	├── package.json
	├── postcss.config.js
	├── README.md
	├── tailwind.config.js
	├── tsconfig.json
	├── tailwind.config.js
	├── vite.config.js
	├── vitest.config.js
	├── public
	│   ├── favicon.ico 
	└── src
		├── App.vue
		├── main.js
		├── style.css
		├── assets
		    ├── css
		    ├── fonts
		    ├── images
		    ├── js
		├── components
		    ├── __tests__
		    ├── Alerts
		    ├── Auths
		    ├── base
		    ├── Breadcrumbs
		    ├── Buttons
		    ├── Charts
		    ├── DataStats
		    ├── Forms
		    ├── Header
		    ├── Maps
		    ├── Sidebar
		    ├── Tables
		    ├── utility
		    ├── Calendar.vue
		    ├── ChatCard.vue
		    ├── ProfileCard.vue
		    ├── SettingsCard.vue
		├── firebase
		├── interfaces
		├── layouts
		├── router
		├── stores
		    ├── auth
		    ├── chart
		    ├── data
		    ├── excel
		    ├── formAPI
		    ├── profile
		    ├── tables
		    ├── users
		    ├── utility
		├── views
		    ├── Authentication
		    ├── Charts
		    ├── Dashboard
		    ├── Forms
		    ├── NotFound
		    ├── Pages
		    ├── Profile
		    ├── Tables
		    ├── UiElements

		
### Functional feature list 
### Register & login feature
- User dapat register melalui email, ataupun auth dari google secara langsung. 
- Terdapat form validation ketika register, dan vertifikasi dari email yang di daftarkan agar bisa mengakses & mengurangi bot/spam
- User dapat Login secara langsung ketika sudah register
- Terdapat fiture forgot password dan show password  
### Form 
- Admin/User dapat melakukan penginputan data karyawan berdasarkan name, age, and more. 
- Terdapat alerts ketika sukses melakukan input data karyawan 
### Dashboard 
- Menampilkan total input admin
- Menampilkan total input all admin
- Visualisasi data donuts, berdasarkan status_karyawan
- Visualisasi data berdasarkan provinsi karyawan
### Dashboard Data Karyawan
- Menampilkan Data list karyawan
- Filter berdasarkan Provinsi, Kota, Kecamatan, Kelurahan
- Export Data Karyawan to excel file.xls
### Profile
- Update Displayname
- Update PhotoUrl
- Uploud file images store in storage firebase
- Delete photo users
- Cancel uploud photo users
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
