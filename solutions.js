/**
 * Created by linhdo on 10/31/16.
 */
function multLinhDo(times) {
    var sum = 0;
    for (var i =3;i < times; i++){
        if(i%3 ==0 || i%5 ==0){
            sum += i;
        }
    }
    return sum;
}

module.exports =  { multLinhDo };