gulp = require 'gulp'
plugins = require('gulp-load-plugins')(pattern: [
  '*{-,.}*'
  'cssnano'
])



gulp.task 'jade', ->
  gulp.src '_src/**/*.jade'
  .pipe plugins.changed '.', extension: '.html'
  .pipe plugins.jadeInheritance basedir: '_src/'
  .pipe plugins.filter (file) ->
    !/\/_/.test(file.path) or !/^_/.test(file.relative)
  .pipe plugins.jade
    pretty: true
    client: false
  .pipe gulp.dest '.'

gulp.task 'css', ->
  processors = [
    plugins.autoprefixerCore browsers: ['last 2 versions','ie 8']
    plugins.postcssAssets {loadPaths: ['images/','fonts/']}
    plugins.cssMqpacker
    plugins.cssnano
  ]
  gulp.src '_src/styles/common.styl'
  .pipe plugins.sourcemaps.init {includeContent: false}
  .pipe plugins.stylus()
  .pipe plugins.postcss processors
  .pipe plugins.rename suffix: '.min'
  .pipe plugins.sourcemaps.write '.'
  .pipe gulp.dest 'styles'

gulp.task 'uglify', ->
  gulp.src '_src/vendor/**/*.js'
  .pipe plugins.concat 'common.min.js'
  .pipe plugins.uglify()
  .pipe gulp.dest 'scripts'

gulp.task 'modernizr', ->
 gulp.src 'scripts/*.js'
 .pipe plugins.modernizr
   options: ['setClasses','addTest','html5printshiv','testProp','fnBind']
   tests: ['forms_placeholder','flexbox','backgroundsize','audio','video','svg','touch','csstransforms']
 .pipe plugins.uglify()
 .pipe gulp.dest 'scripts'

gulp.task 'sprite', ->
  spriteData = gulp.src('_src/sprite/*.png')
  .pipe plugins.spritesmith
    algorithm: 'binary-tree'
    padding: 4
    imgName: 'sprite.png'
    cssName: 'sprite.json'
  spriteData.img.pipe gulp.dest 'images'
  spriteData.css.pipe gulp.dest '_src/styles/sprite'

gulp.task 'svg-sprite', ->
  gulp.src '_src/svg/*.svg'
  .pipe plugins.svgSprite
    mode:
      css:
        dimensions: '-icon'
        dest: '../../_src/styles/svg-sprite'
        sprite: 'sprite.css.svg'
        bust: false
        render:
          styl: true
      symbol: true
      symbol: sprite: '../../../_src/styles/svg-sprite/sprite.symbol.svg'
    svg:
      xmlDeclaration: false
      doctypeDeclaration: false
  .pipe gulp.dest 'images/svg'

gulp.task 'imagemin', ->
  gulp.src 'images/*'
  .pipe plugins.newer 'images'
  .pipe plugins.imagemin
    progressive: true
    use: [ plugins.imageminPngquant() ]
  .pipe gulp.dest 'images'

gulp.task 'browser-sync', ->
  plugins.browserSync.init ['*.html','styles/common.min.css','**/*.{png,jpg,svg}','scripts/main.js','scripts/common.min.js'],
    open: false
    server: baseDir: '.'



gulp.task 'default', ['browser-sync'], ->
  gulp.watch '_src/**/*.styl',       ['css']
  gulp.watch '_src/**/*.jade',       ['jade']
  gulp.watch '_src/vendor/**/*.js',  ['uglify']
  gulp.watch '_src/sprite/*',        ['sprite','css']
  gulp.watch '_src/svg/*.svg',       ['svg-sprite']
  gulp.watch 'images/**/*.{png,jpg}',['imagemin']
