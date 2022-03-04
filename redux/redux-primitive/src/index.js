import { createStore } from "redux";

const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return (state = 0);
        default:
            return state;
    }
};

const increment = {
    type: "INCREMENT"
};

const decrement = {
    type: "DECREMENT"
};

const reset = {
    type: "RESET"
};

const store = createStore(counter);

const count = document.createElement("div");
count.id = "count";
count.innerHTML = store.getState();
document.body.append(count);

const decButton = document.createElement("button");
decButton.innerHTML = "Minus";
decButton.addEventListener("click", () => store.dispatch(decrement));
document.body.append(decButton);

const incButton = document.createElement("button");
incButton.innerHTML = "Plus";
incButton.addEventListener("click", () => store.dispatch(increment));
document.body.append(incButton);

const resetButton = document.createElement("button");
resetButton.addEventListener("click", () => store.dispatch(reset));
resetButton.innerHTML = "Reset";
document.body.append(resetButton);

const render = () => {
    document.getElementById("count").innerHTML = store.getState();
};

store.subscribe(render);
