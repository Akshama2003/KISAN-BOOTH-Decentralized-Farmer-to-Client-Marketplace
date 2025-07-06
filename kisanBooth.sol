// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KisanBooth {
    struct Product {
        uint id;
        address payable farmer;
        string name;
        string image;
        uint price; // in wei
        string transportPreference;
        bool sold;
    }

    uint public productCount;
    mapping(uint => Product) public products;

    event ProductRegistered(uint id, address farmer, string name);
    event ProductPurchased(uint id, address buyer, uint price);

    function registerProduct(
        string memory name,
        string memory image,
        uint price,
        string memory transportPreference
    ) public {
        productCount++;
        products[productCount] = Product(
            productCount,
            payable(msg.sender),
            name,
            image,
            price,
            transportPreference,
            false
        );
        emit ProductRegistered(productCount, msg.sender, name);
    }

    function buyProduct(uint id) public payable {
        Product storage product = products[id];
        require(!product.sold, "Already sold");
        require(msg.value == product.price, "Incorrect price");
        product.farmer.transfer(msg.value);
        product.sold = true;
        emit ProductPurchased(id, msg.sender, msg.value);
    }
}
