// Определяем переменную "preprocessor"
let preprocessor = 'sass';

// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');

// Подключаем Browsersync
const browserSync  = require('browser-sync').create();

// Подключаем gulp-concat
const concat       = require('gulp-concat');

// Подключаем gulp-uglify-es
const uglify       = require('gulp-uglify-es').default;

// Подключаем модули gulp-sass и gulp-less

// const sass         = require('gulp-sass');

const sass = require('gulp-sass')(require('sass'));
const less         = require('gulp-less');

// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Подключаем модуль gulp-clean-css
const cleancss     = require('gulp-clean-css');

// Подключаем gulp-imagemin для работы с изображениями
// const imagemin     = require('gulp-imagemin');

// Подключаем модуль gulp-newer
const newer        = require('gulp-newer');

// Подключаем модуль del 
const del          = require('del');

// Определяем логику работы Browsersync
function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'app/' }, // Указываем папку сервера
		notify: false,  // Отключаем уведомления
		online: true //  Режим работы: true или false
	})
}

function scripts() {
	return src([ // Берём файлы из источников
		'node_modules/jquery/dist/jquery.min.js', // Пример подключения библиотеки
		'app/js/common.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
	])
	.pipe(concat('common.min.js'))	// Конкатенируем в один файл
	.pipe(uglify()) // Сжимаем JavaScript
	.pipe(dest('app/js')) // Выгружаем готовый файл в папку назначения
	.pipe(browserSync.stream()) // Триггерим Browsersync для обновления страницы
}

function styles() {
	return src('app/' + preprocessor + '/main.' + preprocessor + '') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
	.pipe(eval(preprocessor)()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(concat('main.min.css')) // Конкатенируем в файл main.min.css
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	.pipe(cleancss(( { level: { 1: { specialComments: 0 } }/*, format: 'beautify' */} ))) // Минифицируем стили
	.pipe(dest('app/css/')) // Выгрузим результат в папку "app/css/
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

// function images() {
// 	return src('app/img/src/**/*') // Берём все изображения из папки источника
// 	.pipe(newer('app/img/dest/')) // Проверяем, было ли изменено (сжато) изображение ранее
// 	.pipe(imagemin()) // Сжимаем и оптимизируем изображеня
// 	.pipe(dest('app/img/dest/')) // Выгружаем оптимизированные изображения в папку назначения
// }

// function cleanimg() {
// 	return del('app/img/dest/**/*', { force: true }) // Удаляем всё содержимое папки "app/images/dest/"
// }

function cleandist() { 
	return del('dist/**/*', { force: true }) // Удаляем всё содержимое папки "dist/"
}

function buildcopy() {
	return src([ // Выбираем нужные файлы
		'app/css/**/*.min.css',
		'app/js/**/*.min.js',
		'app/img/dest/**/*',
		'app/**/*.html',
	], { base: 'app' }) // Параметр "base" сохраняет структуру проекта при копировании
	.pipe(dest('dist')) // Выгружаем в папку с финальной сборкой
}

function startwatch() {
	watch('app/**/' + preprocessor + '/**/*', styles); // Мониторим файлы препроцессора на изменения
	watch(['app/**/*.js', '!app/**/*.min.js'], scripts); // Выбираем все файлы JS в проекте, а затем исключим с суффиксом .min.js
	watch('app/**/*.html').on('change', browserSync.reload); // Мониторим файлы HTML на изменения
	//watch('app/img/src/**/*', images); // Мониторим папку-источник изображений и выполняем images(), если есть изменения
}

// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync; 

// Экспортируем функцию scripts() в таск scripts
exports.scripts     = scripts;

// Экспортируем функцию styles() в таск styles
exports.styles      = styles;

// Экспорт функции images() в таск images
// exports.images    	= images;

// Экспортируем функцию cleanimg() как таск cleanimg
// exports.cleanimg    = cleanimg;

// Создаём новый таск "build", который последовательно выполняет нужные операции
exports.build       = series(cleandist, styles, scripts, buildcopy);

// Экспортируем дефолтный таск с нужным набором функций
exports.default     = parallel(styles, scripts, browsersync, startwatch);