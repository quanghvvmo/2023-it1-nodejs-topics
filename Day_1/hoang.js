//3.1
let concat = (a,b)=>{
    return a+b
}
//3.2
//use rest operator to take n arguments
let sum = (...n)=>{
    var sum=0;
    for(let i=0; i<n.length; i++)
    {
        sum+=n[i];
    }
    return sum;
}
//3.3
let sort = (a)=>{
    for (let i=0; i<a.length; i++)
    {
        for (j = 0; j < a.length; j++)
        {
            if (a[j] < a[j + 1]) 
            {
                // swap temp and arr[i]
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
        return a
}

//3.4
let match = (a)=>{
    let string = ""
    for(let i=0; i<a.length; i++){
        var count =0
        for(let j=0;j<a.length;j++){
            if(a[i]===a[j]){
              count++
            }
        }
        string+=(a[i]+count)
    }
    return string
    
}

//3.5
var product = {
    name: 'Dell precision 5540',
    model: 'DELL',
    year: 2021,
    price: {
        unitPrice: 350,
        tax: 25,
        discount: 10,
        total: 365
    }
}
for(i in product)
{
    console.log(i)
    console.log(product[i])
    console.log(i + " value: " + product[i]);
}
console.log()

