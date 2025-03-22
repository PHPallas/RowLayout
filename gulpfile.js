/*!
 * PHPallas RowLayout Component v1.x
 * https://github.com/PHPallas/RowLayout
 *
 * Copyright Sina Kuhestani and PHPallas Team
 * Released under the MIT license
 * https://github.com/PHPallas/RowLayout#MIT-1-ov-file
 *
 * Date: 2025-03-22
 */

const { src, dest } = require("gulp");
const pug = require("gulp-pug");

exports.pugToHtml = () => {
  return src("./src/Pug/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest("./dist/html"));
};

