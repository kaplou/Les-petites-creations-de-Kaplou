/*
  ============================================================================
  LES PETITES CRÉATIONS DE KAPLOU
  ============================================================================

  Tout ce que vous aurez surtout envie de modifier se trouve dans le tableau
  PRODUITS ci-dessous.

  Pour ajouter une pièce : copiez un objet existant et changez ses informations.
  Pour supprimer une pièce : retirez simplement son objet du tableau.
  Pour modifier un prix, une photo imaginaire ou une histoire : modifiez le
  champ concerné dans l'objet du produit.
  Pour ajouter un paiement : remplacez stripeLink par votre vrai lien Stripe.
  Pour marquer une pièce comme adoptée : changez status en "adopted".

  Les images de démonstration sont dessinées en CSS. Vous pourrez les remplacer
  plus tard par vos propres photos en modifiant la fonction productArtwork().
*/

// ============================================================================
// PRODUITS
// ============================================================================

const PRODUITS = [
  {
    id: "bleu-de-poche",
    name: "Bleu de poche",
    category: "Dessins & peintures",
    subtitle: "Gouache, encre et papier coton",
    story:
      "Un petit paysage qui tient dans la main. Kaplou l’a peint après une marche au bord du canal, avec la couleur exacte du ciel juste avant la pluie.",
    note: "Le premier trait est toujours le plus libre.",
    price: "180 €",
    dimensions: "24 × 30 cm",
    materials: "Gouache, encre, papier 300 g",
    year: "2024",
    status: "available",
    isNew: true,
    variant: "blue-landscape",
    stripeLink: "https://buy.stripe.com/REMPLACER_BLEU_DE_POCHE",
  },
  {
    id: "monde-a-l-envers",
    name: "Le monde à l’envers",
    category: "Dessins & peintures",
    subtitle: "Acrylique sur bois trouvé",
    story:
      "Cette planche avait servi d’étagère dans une cuisine de village. Elle portait encore une petite marque de farine quand elle est devenue une fenêtre vers ailleurs.",
    note: "Peindre sur ce qui a déjà vécu.",
    price: "240 €",
    dimensions: "32 × 42 cm",
    materials: "Acrylique, bois patiné, cire",
    year: "2023",
    status: "available",
    variant: "upside-down",
    stripeLink: "https://buy.stripe.com/REMPLACER_LE_MONDE_A_LENVERS",
  },
  {
    id: "herbier-du-dimanche",
    name: "Herbier du dimanche",
    category: "Dessins & peintures",
    subtitle: "Crayon gras et pigments",
    story:
      "Une page lente, dessinée à partir de trois branches ramassées sans intention. Les nervures sont restées visibles, comme une écriture étrangère.",
    note: "Regarder assez longtemps pour voir apparaître.",
    price: "145 €",
    dimensions: "21 × 29,7 cm",
    materials: "Crayon gras, pigments, papier",
    year: "2024",
    status: "adopted",
    variant: "herbarium",
    stripeLink: "https://buy.stripe.com/REMPLACER_HERBIER_DU_DIMANCHE",
  },
  {
    id: "lettre-a-personne",
    name: "Lettre à personne",
    category: "Collages & papier",
    subtitle: "Papier d’archive et fil rouge",
    story:
      "Des enveloppes sans adresse, un ticket de bal et une marge de cahier se sont retrouvés ensemble. La lettre n’est jamais partie, mais elle a trouvé sa forme.",
    note: "Tout papier garde un peu de la main qui l’a plié.",
    price: "110 €",
    dimensions: "29,7 × 42 cm",
    materials: "Papiers anciens, fil, colle d’atelier",
    year: "2024",
    status: "available",
    isNew: true,
    variant: "letter",
    stripeLink: "https://buy.stripe.com/REMPLACER_LETTRE_A_PERSONNE",
  },
  {
    id: "soleil-qui-reste",
    name: "Le soleil qui reste",
    category: "Collages & papier",
    subtitle: "Collage sur carton entoilé",
    story:
      "Le cercle central vient d’un vieux nuancier de peintre. Il avait la bonne couleur, celle qui reste dans une pièce quand la fenêtre est déjà fermée.",
    note: "Les chutes savent parfois mieux où aller.",
    price: "160 €",
    dimensions: "30 × 30 cm",
    materials: "Carton, papiers teintés, pastel",
    year: "2024",
    status: "available",
    variant: "sun-collage",
    stripeLink: "https://buy.stripe.com/REMPLACER_LE_SOLEIL_QUI_RESTE",
  },
  {
    id: "pochettes-de-pluie",
    name: "Pochettes de pluie",
    category: "Collages & papier",
    subtitle: "Série de 3 monotypes",
    story:
      "Trois empreintes faites le même matin, fenêtre ouverte. Chaque goutte a déplacé un peu l’encre et décidé de la suite.",
    note: "Une série, mais pas de copie.",
    price: "95 €",
    dimensions: "3 × 18 × 24 cm",
    materials: "Monotype, encre, papier vergé",
    year: "2023",
    status: "adopted",
    variant: "rain-pockets",
    stripeLink: "https://buy.stripe.com/REMPLACER_POCHETTES_DE_PLUIE",
  },
  {
    id: "madame-feuille",
    name: "Madame Feuille",
    category: "Sculptures",
    subtitle: "Grès chamotté, émail mat",
    story:
      "Elle a une allure de personnage rencontré au marché. Ses épaules viennent d’une empreinte de pouce et son nez a été ajouté après le café.",
    note: "La terre aime les décisions prises un peu trop tard.",
    price: "290 €",
    dimensions: "18 × 12 × 9 cm",
    materials: "Grès chamotté, émail",
    year: "2024",
    status: "available",
    isNew: true,
    variant: "leaf-lady",
    stripeLink: "https://buy.stripe.com/REMPLACER_MADAME_FEUILLE",
  },
  {
    id: "petit-gardien",
    name: "Petit gardien",
    category: "Sculptures",
    subtitle: "Bois flotté et cire pigmentée",
    story:
      "Un morceau de bois rejeté par la rivière, assez droit pour tenir debout. Kaplou lui a seulement offert deux yeux et une mission : veiller sur une étagère.",
    note: "Il ne monte pas la garde, il tient compagnie.",
    price: "210 €",
    dimensions: "27 × 8 × 7 cm",
    materials: "Bois flotté, cire, graphite",
    year: "2024",
    status: "available",
    variant: "little-guard",
    stripeLink: "https://buy.stripe.com/REMPLACER_PETIT_GARDIEN",
  },
  {
    id: "trois-graines",
    name: "Trois graines",
    category: "Sculptures",
    subtitle: "Porcelaine modelée à la main",
    story:
      "Trois formes à poser ensemble ou à disperser. Elles ont été modelées les yeux fermés, pour que la main se souvienne à la place du dessin.",
    note: "Petites, mais pas timides.",
    price: "130 €",
    dimensions: "10 × 7 × 5 cm chacune",
    materials: "Porcelaine, engobe, socle bois",
    year: "2023",
    status: "adopted",
    variant: "three-seeds",
    stripeLink: "https://buy.stripe.com/REMPLACER_TROIS_GRAINES",
  },
  {
    id: "lampe-bleue",
    name: "La lampe bleue",
    category: "Objets & mobilier transformés",
    subtitle: "Lampe de chevet, seconde vie",
    story:
      "Trouvée dans une ressourcerie avec son abat-jour froissé, elle a changé de couleur mais pas de silhouette. Elle éclaire doucement les lectures tardives.",
    note: "Réparer plutôt que remplacer.",
    price: "320 €",
    dimensions: "42 × 18 cm",
    materials: "Métal peint, tissu chiné, électricité révisée",
    year: "2024",
    status: "available",
    isNew: true,
    variant: "blue-lamp",
    stripeLink: "https://buy.stripe.com/REMPLACER_LA_LAMPE_BLEUE",
  },
  {
    id: "tabouret-des-pommes",
    name: "Tabouret des pommes",
    category: "Objets & mobilier transformés",
    subtitle: "Tabouret de ferme, peinture et tissu",
    story:
      "Il attendait sous une bâche dans une grange. Un rouge brique sur les pieds, un reste de toile à carreaux sur l’assise : le voilà prêt pour une autre cuisine.",
    note: "Le bois garde la mémoire des goûters.",
    price: "260 €",
    dimensions: "44 × 31 × 31 cm",
    materials: "Bois massif, peinture mate, toile",
    year: "2023",
    status: "available",
    variant: "apple-stool",
    stripeLink: "https://buy.stripe.com/REMPLACER_TABOURET_DES_POMMES",
  },
  {
    id: "miroir-pour-regarder-autour",
    name: "Miroir pour regarder autour",
    category: "Objets & mobilier transformés",
    subtitle: "Cadre chiné, verre ancien",
    story:
      "Le miroir est légèrement piqué : il ne promet pas un reflet net, mais une pièce avec du temps autour. Le cadre a été poncé juste assez.",
    note: "On y voit surtout la lumière.",
    price: "340 €",
    dimensions: "38 × 52 cm",
    materials: "Bois peint, verre ancien, cire",
    year: "2022",
    status: "adopted",
    variant: "old-mirror",
    stripeLink: "https://buy.stripe.com/REMPLACER_MIroir_POUR_REGARDER_AUTOUR",
  },
];

const productGrid = document.getElementById("product-grid");
const newGrid = document.getElementById("new-grid");
const filterCount = document.getElementById("filter-count");
const storyImage = document.getElementById("story-image");
const storyTitle = document.getElementById("story-title");
const storySubtitle = document.getElementById("story-subtitle");
const storyText = document.getElementById("story-text");
const storyNote = document.getElementById("story-note");
const storyAdopt = document.getElementById("story-adopt");
const storyNext = document.getElementById("story-next");
const stripeNote = document.getElementById("stripe-note");
const storyDetails = document.getElementById("story-details");
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.getElementById("main-navigation");

let activeFilter = "Tout";
let activeProduct = PRODUITS[0];

function productArtwork(product, extraClass = "") {
  return `
    <div class="art-preview art-${product.variant} ${extraClass}" role="img" aria-label="Aperçu de ${product.name}">
      <span class="art-shadow"></span>
      <span class="art-mark">K.</span>
    </div>
  `;
}

function productCard(product) {
  const availability = product.status === "available";
  const adoptionAction = availability
    ? `<a class="adopt-link" href="${product.stripeLink}" target="_blank" rel="noreferrer">Adopter cette pièce <span aria-hidden="true">↗</span></a>`
    : `<span class="adopted-copy">Cette pièce a trouvé sa maison</span>`;

  return `
    <article class="product-card ${product.status === "adopted" ? "is-adopted" : ""}">
      <button class="product-open" type="button" data-product-id="${product.id}" aria-label="Lire l'histoire de ${product.name}">
        <div class="product-image">
          ${productArtwork(product)}
          ${product.isNew ? '<span class="new-tag">Nouveau ici</span>' : ""}
          ${!availability ? '<span class="adopted-tag">Adopté</span>' : ""}
        </div>
        <div class="product-info">
          <p class="eyebrow">${product.category}</p>
          <h3>${product.name}</h3>
          <p class="product-subtitle">${product.subtitle}</p>
        </div>
      </button>
      <div class="product-footer">
        <span class="product-price">${product.price}</span>
        ${adoptionAction}
      </div>
    </article>
  `;
}

function renderCollection() {
  const visibleProducts =
    activeFilter === "Tout"
      ? PRODUITS
      : PRODUITS.filter((product) => product.category === activeFilter);

  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts.map(productCard).join("")
    : '<p class="empty-state">Il n’y a pas encore de pièce dans cette famille.</p>';
  filterCount.textContent = `${visibleProducts.length} pièce${visibleProducts.length > 1 ? "s" : ""} visible${visibleProducts.length > 1 ? "s" : ""}`;
}

function renderNewProducts() {
  newGrid.innerHTML = PRODUITS.filter((product) => product.isNew)
    .slice(0, 3)
    .map(productCard)
    .join("");
}

function renderStory(product, shouldScroll = false) {
  activeProduct = product;
  storyImage.innerHTML = productArtwork(product, "art-large");
  storyTitle.textContent = product.name;
  storySubtitle.textContent = `${product.subtitle} · ${product.dimensions}`;
  storyText.textContent = `« ${product.story} »`;
  storyNote.textContent = product.note;
  storyDetails.innerHTML = `
    <div><dt>Matières</dt><dd>${product.materials}</dd></div>
    <div><dt>Année</dt><dd>${product.year}</dd></div>
    <div><dt>Format</dt><dd>${product.dimensions}</dd></div>
    <div><dt>Prix</dt><dd>${product.price}</dd></div>
  `;

  if (product.status === "available") {
    storyAdopt.hidden = false;
    storyAdopt.href = product.stripeLink;
    stripeNote.textContent = product.stripeLink.includes("REMPLACER")
      ? "Le lien affiché est un placeholder : remplacez-le par le lien Stripe de cette pièce."
      : "Le paiement s’ouvrira sur la page Stripe de cette pièce.";
  } else {
    storyAdopt.hidden = true;
    stripeNote.textContent = "Cette pièce a trouvé sa maison.";
  }

  if (shouldScroll) {
    document.getElementById("story").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function changeFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  renderCollection();
}

document.addEventListener("click", (event) => {
  const openButton = event.target.closest(".product-open");
  if (openButton) {
    const product = PRODUITS.find((item) => item.id === openButton.dataset.productId);
    if (product) renderStory(product, true);
  }

  const filterButton = event.target.closest(".filter-button");
  if (filterButton) changeFilter(filterButton.dataset.filter);

  const filterLink = event.target.closest("[data-filter-link]");
  if (filterLink) {
    changeFilter(filterLink.dataset.filter);
    closeMenu();
  }
});

storyNext.addEventListener("click", () => {
  const currentIndex = PRODUITS.findIndex((product) => product.id === activeProduct.id);
  const nextProduct = PRODUITS[(currentIndex + 1) % PRODUITS.length];
  renderStory(nextProduct, false);
});

function closeMenu() {
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  mainNavigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  mainNavigation.classList.toggle("is-open", isOpen);
});

mainNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && !event.target.closest("[data-filter-link]")) {
    closeMenu();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.hidden = false;
  form.reset();
});

renderCollection();
renderNewProducts();
renderStory(activeProduct);
