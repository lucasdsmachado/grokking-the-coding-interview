const maximum_sliding_window = function (nums, k) {
  let res = [], dq = [];

  for (let i = 0; i < k; i++) {
    while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]])
      dq.pop();
    dq.push(i);
  }

  res.push(nums[dq[0]]);

  for (let i = k; i < nums.length; i++) {
    if (dq.length > 0 && dq[0] === i - k)
      dq.shift();
    while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]])
      dq.pop();
    dq.push(i);
    res.push(nums[dq[0]]);
  }

  return res;
};