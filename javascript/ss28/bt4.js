let rectangle = {
    width: 10,
    height: 5,
    getArea: function(){
        return this.width * this.height;
    }
};

const  area = rectangle.getArea();

console.log("Diện tích hình chữ nhật là: ", area);