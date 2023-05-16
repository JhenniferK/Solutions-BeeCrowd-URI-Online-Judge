select p.name from products p
join providers f on p.id_providers = f.id
where p.amount between 10 and 20
and f.name like 'P%';
