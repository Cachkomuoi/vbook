load('config.js');
function execute() {
   // let response = fetch(BASE_URL);

    const doc = Http.get(BASE_URL).html();
    const el = doc.select(".categories a");
    const data = [];
    for (var i = 4; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: e.attr('href').split('/')[4],
           script: 'gen.js'
        });
    }
    return Response.success(data);
}