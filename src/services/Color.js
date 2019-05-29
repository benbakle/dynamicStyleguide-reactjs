class Color {

    colors = [
        {name:"primary", color:"#5500aa"},
        {name:"secondary"},
        {name:"alternative"},
   ];

    callbacks = [];

    load(colors){
        this.colors=colors;
    }

    add(color) {
        if (this.colorDoesNotExist(color)) {
            this.colors.push(color);
            this.updateSubscribers();
        }
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }

    updateSubscribers() {
        this.callbacks.forEach(cb => cb());
    }

    colorDoesNotExist(color) {
        for (let i = 0; i < this.colors.length; i++) {
            if ((this.colors[i].name === color.name)  || (this.colors[i].color === color.color))
                return false;
        }
        return true;
    }
}

export default new Color();