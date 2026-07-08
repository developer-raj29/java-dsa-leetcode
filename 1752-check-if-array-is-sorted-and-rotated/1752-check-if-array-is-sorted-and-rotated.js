/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
   let count = 0;
   let size = nums.length;

   if(nums[0] < nums[size-1]){
    count++;
   }

   for(let i = 1; i < size; i++){
    if(nums[i-1] > nums[i]){
        count++;
        if(count > 1){
            return false;
        }
    }
   }

   return true;
};