describe("throttle(f, 1000)", function() {
    let f1000;
    let log = "";
  
    function f(a) {
        log += a;
    }
  
    before(function() {
        f1000 = throttle(f, 1000);
        this.clock = sinon.useFakeTimers();
    });
  
    it("1-й вызов происходит немедленно", function() {
        f1000(1); // вызов происходит немедленно
        assert.equal(log, "1");
    });
  
    it("далее вызовы игнорируются до истечения 1000 мс от последнего вызова", function() {
        f1000(2); // (задержка - менее 1000 мс с момента последнего вызова)
        f1000(3); // (задержка - менее 1000 мс с момента последнего вызова)
        // запланирован вызов спустя f(3) 1000 мс
  
        assert.equal(log, "1"); // прямо сейчас только 1-й вызов завершён
  
        this.clock.tick(1000); // через 1000 мс...
        assert.equal(log, "13"); // log==13, произошёл вызов f1000(3)
    });
  
    it("3-й вызов ждет 1000 мс от 2-го", function() {
        this.clock.tick(100);
        f1000(4); // (задержка - менее 1000 мс с момента последнего вызов)
        this.clock.tick(100);
        f1000(5); // (задержка - менее 1000 мс с момента последнего вызова)
        this.clock.tick(700);
        f1000(6); // (задержка - менее 1000 мс с момента последнего вызова)
  
        this.clock.tick(100); // теперь прошло 100 + 100 + 700 + 100 = 1000 мс
  
        assert.equal(log, "136"); // последний вызов был f(6)
    });
  
    after(function() {
        this.clock.restore();
    });
  
});