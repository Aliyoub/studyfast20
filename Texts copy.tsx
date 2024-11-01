export const texts = [
  {
    category: 'Geographie',
    content: 'Les cinq contents sont: Afrique, Asie, Amerique, Europe, Océanie',
  },
  {category: 'Histoire', content: 'Première guerre mondiale: 1918'},
  {category: 'Maths', content: "Pythagore: Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés."
  },
  {category: 'Informatique', content: 'Python'},
  {category: 'Docker', content: `
  1. Which command do you use to create a new swarm? docker swarm init --advertise-addr <MANAGER-IP>
  2. What is this flag --advertise-addr for?
  This flag configures the IP address for the manager node and The other nodes in the swarm must be able to access the manager at the IP address.
  
  3. How do you know the current status of the swarm?
  docker info // you can find the info under the swarm section
  
  4. Which command do you use to find the information about the nodes in the swarm?
  docker node ls
  
  5. How to add another manager to the swarm?
  // it generate the instructions for the manager to be added
  docker swarm join-token manager
  
  6. How to add another worker node to the swarm?
  // it generate the instructions for the worker to be added
  docker swarm join-token worker
  
  7. How to run the container?
  docker run <image>
  
  8. What is the autolock feature in the Docker swarm?
  When Docker restarts, both the TLS key used to encrypt communication among swarm nodes, and the key used to encrypt and decrypt Raft logs on disk, are loaded into each manager node’s memory.
  
  Docker 1.13 introduces the ability to protect the mutual TLS encryption key and the key used to encrypt and decrypt Raft logs at rest, by allowing you to take ownership of these keys and to require manual unlocking of your managers. This feature is called autolock.
  
  9. How to lock the swarm?
  // This command produces unlock key. You need to place that in safe place
  docker swarm init --autolock
  
  10. How to unlock the swarm?`}

];

export const categories = texts.map((c, i) => {
  return c;
});
