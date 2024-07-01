// 붕대 감기

function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const maxHealth = health;
  let cnt = 0;
  const length = attacks[attacks.length - 1][0];
  const attackTime = attacks.map((e) => e[0]);
  const attackDamage = new Array(attacks.length).fill(0);
  attacks.forEach((attack) => {
    const seconds = attack[0];
    const damages = attack[1];
    attackDamage[seconds] = damages;
  });
  for (let i = 1; i <= length; i++) {
    if (attackTime.includes(i)) {
      health -= attackDamage[i];
      if (health <= 0) {
        return -1;
      }
      cnt = 0;
    } else {
      if (health + x > maxHealth) {
        health = maxHealth;
      } else {
        health += x;
      }
      cnt++;
    }

    if (cnt === t) {
      cnt = 0;
      if (health + y > maxHealth) {
        health = maxHealth;
      } else {
        health += y;
      }
    }
  }
  return health;
}
