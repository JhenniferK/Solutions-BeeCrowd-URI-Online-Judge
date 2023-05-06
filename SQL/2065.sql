select p.name, f.name
from products p inner join providers f on
p.id_providers = f.id
where p.id_categories = 6;
