class AddressBookData {
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            throw 'Name is incorrect!';
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([1-9]{1}[0-9]{9}|[9]{1}[1]{1}[1-9]{1}[0-9]{9}|/[+]{1}[9]{1}[1]{1}[1-9]{1}[0-9]{9})$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw 'Phone Number is incorrect!';
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        this._zip = zip;
    }

    toString() {
        return "Name : " + this._name + ", Phone Number : " + this._phoneNumber + ", Address : " + this._address + ", City : " + this._city
            + ", State : " + this._state + ", Zip : " + this._zip;
    }
}

const save = () => {
    try {
        setAddressBookObject();
    } catch (e) {
        alert("Oops!!! There's an error ======> " + e);
        alert("Please correct the details & try again...!!!");
        return;
    }
}

const setAddressBookObject = () => {
    let addressBookObj = new AddressBookData();

    addressBookObj.name = getInputValueById('#name');
    addressBookObj.phoneNumber = getInputValueById('#phoneNumber');
    addressBookObj.address = getInputValueById('#address');
    addressBookObj.city = getInputValueById('#city');
    addressBookObj.state = getInputValueById('#state');
    addressBookObj.zip = getInputValueById('#zipCode');

    alert("Object added successfully -----> " + addressBookObj.toString());
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}