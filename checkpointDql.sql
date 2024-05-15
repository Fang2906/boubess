-- Afficher toutes les données des clients
SELECT * FROM clients;

-- Afficher le nom_du_produit et la catégorie pour les produits dont le prix est compris entre 5000 et 10000
SELECT nom_du_produit, categorie
FROM produits
WHERE prix BETWEEN 5000 AND 10000;

-- Affichez toutes les données des produits triés par ordre décroissant de prix
SELECT * FROM produits
ORDER BY prix DESC;

-- Afficher le nombre total de commandes, le montant moyen, le montant total le plus élevé et le montant total inférieur
SELECT COUNT(*) AS nombre_commandes,
       AVG(montant_total) AS montant_moyen,
       MAX(montant_total) AS montant_max,
       MIN(montant_total) AS montant_min
FROM commandes;

-- Pour chaque product_id, afficher le nombre de commandes
SELECT product_id, COUNT(*) AS nombre_commandes
FROM commandes
GROUP BY product_id;

-- Afficher le customer_id qui a plus de 2 commandes
SELECT customer_id
FROM commandes
GROUP BY customer_id
HAVING COUNT(*) > 2;

-- Pour chaque mois de l'année 2020, affichez le nombre de commandes
SELECT EXTRACT(YEAR FROM date_commande) AS annee, EXTRACT(MONTH FROM date_commande) AS mois, COUNT(*) AS nombre_commandes
FROM commandes
WHERE EXTRACT(YEAR FROM date_commande) = 2020
GROUP BY EXTRACT(YEAR FROM date_commande), EXTRACT(MONTH FROM date_commande)
ORDER BY mois;

-- Pour chaque commande, affichez le nom_produit, le nom_client et la date de la commande
SELECT p.nom_du_produit, c.nom_client, cmd.date_commande
FROM commandes cmd
JOIN clients c ON cmd.customer_id = c.customer_id
JOIN produits p ON cmd.product_id = p.product_id;

-- Afficher toutes les commandes passées il y a trois mois
SELECT * FROM commandes
WHERE date_commande >= CURRENT_DATE - INTERVAL '3 months'
  AND date_commande < CURRENT_DATE - INTERVAL '2 months';

-- Afficher les clients (customer_id) qui n'ont jamais commandé de produit
SELECT c.customer_id
FROM clients c
LEFT JOIN commandes cmd ON c.customer_id = cmd.customer_id
WHERE cmd.commande_id IS NULL;
