pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
// Статус 200 ОК при логине студента

pm.test("Response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     //pm.response.to.be.json;
});
//  Статус 200 ОК с телом ответа при логине студента

console.log(pm.response.text()); 
pm.collectionVariables.set("student_token", pm.response.text()); 
// Использование Bearer token как переменной для логина 

pm.test("Status code is 200", () => {
  pm.expect(pm.response.code).to.eql(200); 
}); 
// Получение статуса 200 при создании заказа нап фронте

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("4706")
});
// Поиск строки содержащей значенрие "4706"

pm.test("Create order by customerName and comment", () => {
    console.log(pm.response)
  const responseJson = pm.response.json();
  pm.expect(responseJson.customerName).to.eql("Vassily"); 
  pm.expect(responseJson.comment).to.eql("Чай ахмад");
});
// Создание заказа используя переменные customerName и comment

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});
// Получение статуса 200, с телом ответа и в формате json

pm.test("Body contains string",() => {
  pm.expect(pm.response.text()).to.include("ELUDO");
});
//  Поиск строки содержащей значение "ELUDO"

pm.test('Get order by id=4345 and status=OPEN', () => {
    let order = pm.response.json().find(a => a.id === 4345);
    console.log(order)
    pm.expect(order.status).to.eql("OPEN");
});
// Поиск заказа тспользуя переменные 

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
// Скорость ответа на запрос меньше 200 мс OK

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
// Статус 200 ОК при создании курьера

pm.test("Response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});
// Статус 200 ОК с телом ответа и формат  json при создании курьера

pm.test("Create courier with name Ivan and login courier1234", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Alexey1"); 
  pm.expect(responseJson.login).to.eql("User07071");
});
// Создание курьера используя переменные name и login 

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
//  ответ на запрос меньше чем 200 мс при создании курьера

