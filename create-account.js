function createAccount(pinNum, balance=0) {

    return {

        checkBalance(pin) {

            if (pin === pinNum) {
                return `$${balance}`;
            } else {
                return "Invalid PIN.";
            }

        },

        deposit(pin, amt) {

            if (pin === pinNum) {

                balance += amt;
                return `Succesfully deposited $${amt}. Current balance: $${balance}.`;

            } else {
                return "Invalid PIN."
            }

        },

        withdraw(pin, amt) {

            if (pin === pinNum && balance >= amt) {

                balance -= amt;
                return `Succesfully withdrew $${amt}. Current balance: $${balance}.`;

            } else if (pin === pinNum && balance < amt) {

                return "Withdrawal amount exceeds account balance. Transaction cancelled.";

            } else {

                return "Invalid PIN.";

            }

        },

        changePin(oldPin, newPin) {

            if (oldPin === pinNum) {
                pinNum = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN.";

            }

        }

    }

}

module.exports = { createAccount };
