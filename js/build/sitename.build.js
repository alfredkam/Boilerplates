//commandline: node lib/require/r.js -o js/build/sitename.build.js

({
    mainConfigFile: "../main/sitename-main.js",
    findNestedDependencies: true,
    name: "lib/almond/almond.js",
    include: "js/main/sitename-main.js",
    out: "sitename.js",
    wrap: true
})