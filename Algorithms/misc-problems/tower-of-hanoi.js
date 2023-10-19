/**
 * shift 'n-1' disks from A to B using C (when required)
 * shift the last disk from A to C
 * shift 'n-1' disks from B to C using A (when required)
 */
 
function towerOfHanoi(n, fromRod, toRod, usingRod){
  /// Best-Case
  if(n === 1){
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return
  }

  /// shift 'n-1' disks from A to B using C (when required)
  towerOfHanoi(n-1, fromRod, usingRod, toRod);
  
  /// shift the last disk from A to C
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  /// shift 'n-1' disks from B to C using A (when required)
  towerOfHanoi(n-1, usingRod, toRod, fromRod);
 
}

towerOfHanoi(3, 'A', 'C', 'B');