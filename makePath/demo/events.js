const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("anything", (data) => console.log("ON anything", data));

// emitter.emit("anything", { a: "INFO" });
// setTimeout(() => emitter.emit("anything", { b: "INFO 34" }), 2000);
// emitter.emit("anything", { c: "INFO12" });

class Dispatch extends EventEmitter {
  sibscribe(eventName, cb) {
    console.log("[...Sibscribe]");
    this.on(eventName, cb);
  }
  dispatch(eventName, data) {
    console.log("[...Dispatch]");
    this.emit(eventName, data);
  }
}

const emitter = new Dispatch();

emitter.sibscribe("event", (data) =>
  console.log(">>>>This is the data: ", data)
);

emitter.dispatch("event", { a: 88, k: "HERE" });
