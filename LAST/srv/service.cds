service product{
    function printhelloworld (input:String) returns String;
    function addition(num1: Integer, num2: Integer) returns Integer;

    type CategoryInfo {
        product : String;
        price   : String;
        location: String;
        stock   : Integer;
        priceArray : array of {
            price : Integer;
            discount : String;
        };
    }
    function myfunction(category: Integer) returns CategoryInfo;
}