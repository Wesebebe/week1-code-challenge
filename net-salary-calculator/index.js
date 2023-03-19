function calculatePaye(income){
    if(income === 25000){
        return income * 0.10;
    }else if(income>24001 && income<32333){
        return income * 0.25;
    }else if(income>32333){
        return income * 0.30;
    }

}