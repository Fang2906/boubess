function dijkstra(graph, start) {
  // Créer un objet pour stocker les distances les plus courtes
  const distances = {};
  // Initialiser toutes les distances à l'infini sauf pour le sommet de départ
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  // Initialiser un ensemble pour stocker les sommets non visités
  const unvisited = new Set(Object.keys(graph));

  while (unvisited.size > 0) {
    // Trouver le sommet non visité avec la plus petite distance
    let current = null;
    for (let vertex of unvisited) {
      if (current === null || distances[vertex] < distances[current]) {
        current = vertex;
      }
    }

    // Supprimer le sommet actuel de l'ensemble des non visités
    unvisited.delete(current);

    // Parcourir les voisins du sommet actuel
    for (let neighbor in graph[current]) {
      let distance = distances[current] + graph[current][neighbor];
      // Mettre à jour la distance si elle est plus courte que la distance actuellement stockée
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }

  return distances;
}

// Exemple d'utilisation
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

console.log(dijkstra(graph, "A"));
