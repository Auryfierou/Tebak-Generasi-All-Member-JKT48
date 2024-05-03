const quizData = [
  { image: "/src/gen3/Shani_1.jpeg", correctAnswer: "Shani", gen: "3" },
  { image: "/src/gen3/Shani_2.jpeg", correctAnswer: "Shani", gen: "3" },
  { image: "/src/gen3/Shani_3.jpeg", correctAnswer: "Shani", gen: "3" },
  { image: "/src/gen3/Shani_4.jpeg", correctAnswer: "Shani", gen: "3" },
  { image: "/src/gen3/Shani_5.jpeg", correctAnswer: "Shani", gen: "3" },
  { image: "/src/gen3/Gracia_1.jpeg", correctAnswer: "Gracia", gen: "3" },
  { image: "/src/gen3/Gracia_2.jpeg", correctAnswer: "Gracia", gen: "3" },
  { image: "/src/gen3/Gracia_3.jpeg", correctAnswer: "Gracia", gen: "3" },
  { image: "/src/gen3/Gracia_4.jpeg", correctAnswer: "Gracia", gen: "3" },
  { image: "/src/gen3/Gracia_5.jpeg", correctAnswer: "Gracia", gen: "3" },
  { image: "/src/gen3/Feni_1.jpeg", correctAnswer: "Feni", gen: "3" },
  { image: "/src/gen3/Feni_2.jpeg", correctAnswer: "Feni", gen: "3" },
  { image: "/src/gen3/Feni_3.jpeg", correctAnswer: "Feni", gen: "3" },
  { image: "/src/gen3/Feni_4.jpeg", correctAnswer: "Feni", gen: "3" },
  { image: "/src/gen3/Feni_5.jpeg", correctAnswer: "Feni", gen: "3" },
  { image: "/src/gen6/Gita_1.jpeg", correctAnswer: "Gita", gen: "6" },
  { image: "/src/gen6/Gita_2.jpeg", correctAnswer: "Gita", gen: "6" },
  { image: "/src/gen6/Gita_3.jpeg", correctAnswer: "Gita", gen: "6" },
  { image: "/src/gen6/Gita_4.jpeg", correctAnswer: "Gita", gen: "6" },
  { image: "/src/gen6/Gita_5.jpeg", correctAnswer: "Gita", gen: "6" },
  { image: "/src/gen7/Christy_1.jpeg", correctAnswer: "Christy", gen: "7" },
  { image: "/src/gen7/Christy_2.jpeg", correctAnswer: "Christy", gen: "7" },
  { image: "/src/gen7/Christy_3.jpeg", correctAnswer: "Christy", gen: "7" },
  { image: "/src/gen7/Christy_4.jpeg", correctAnswer: "Christy", gen: "7" },
  { image: "/src/gen7/Christy_5.jpeg", correctAnswer: "Christy", gen: "7" },
  { image: "/src/gen7/Zee_1.jpeg", correctAnswer: "Zee", gen: "7" },
  { image: "/src/gen7/Zee_2.jpeg", correctAnswer: "Zee", gen: "7" },
  { image: "/src/gen7/Zee_3.jpeg", correctAnswer: "Zee", gen: "7" },
  { image: "/src/gen7/Zee_4.jpeg", correctAnswer: "Zee", gen: "7" },
  { image: "/src/gen7/Zee_5.jpeg", correctAnswer: "Zee", gen: "7" },
  { image: "/src/gen7/Olla_1.jpeg", correctAnswer: "Olla", gen: "7" },
  { image: "/src/gen7/Olla_2.jpeg", correctAnswer: "Olla", gen: "7" },
  { image: "/src/gen7/Olla_3.jpeg", correctAnswer: "Olla", gen: "7" },
  { image: "/src/gen7/Olla_4.jpeg", correctAnswer: "Olla", gen: "7" },
  { image: "/src/gen7/Olla_5.jpeg", correctAnswer: "Olla", gen: "7" },
  { image: "/src/gen7/Freya_1.jpeg", correctAnswer: "Freya", gen: "7" },
  { image: "/src/gen7/Freya_2.jpeg", correctAnswer: "Freya", gen: "7" },
  { image: "/src/gen7/Freya_3.jpeg", correctAnswer: "Freya", gen: "7" },
  { image: "/src/gen7/Freya_4.jpeg", correctAnswer: "Freya", gen: "7" },
  { image: "/src/gen7/Freya_5.jpeg", correctAnswer: "Freya", gen: "7" },
  { image: "/src/gen7/Eli_1.jpeg", correctAnswer: "Eli", gen: "7" },
  { image: "/src/gen7/Eli_2.jpeg", correctAnswer: "Eli", gen: "7" },
  { image: "/src/gen7/Eli_3.jpeg", correctAnswer: "Eli", gen: "7" },
  { image: "/src/gen7/Eli_4.jpeg", correctAnswer: "Eli", gen: "7" },
  { image: "/src/gen7/Eli_5.jpeg", correctAnswer: "Eli", gen: "7" },
  { image: "/src/gen7/Jessi_1.jpeg", correctAnswer: "Jessi", gen: "7" },
  { image: "/src/gen7/Jessi_2.jpeg", correctAnswer: "Jessi", gen: "7" },
  { image: "/src/gen7/Jessi_3.jpeg", correctAnswer: "Jessi", gen: "7" },
  { image: "/src/gen7/Jessi_4.jpeg", correctAnswer: "Jessi", gen: "7" },
  { image: "/src/gen7/Jessi_5.jpeg", correctAnswer: "Jessi", gen: "7" },
  { image: "/src/gen7/Muthe_1.jpeg", correctAnswer: "Muthe", gen: "7" },
  { image: "/src/gen7/Muthe_2.jpeg", correctAnswer: "Muthe", gen: "7" },
  { image: "/src/gen7/Muthe_3.jpeg", correctAnswer: "Muthe", gen: "7" },
  { image: "/src/gen7/Muthe_4.jpeg", correctAnswer: "Muthe", gen: "7" },
  { image: "/src/gen7/Muthe_5.jpeg", correctAnswer: "Muthe", gen: "7" },
  { image: "/src/gen8/Oniel_1.jpeg", correctAnswer: "Oniel", gen: "8" },
  { image: "/src/gen8/Oniel_2.jpeg", correctAnswer: "Oniel", gen: "8" },
  { image: "/src/gen8/Oniel_3.jpeg", correctAnswer: "Oniel", gen: "8" },
  { image: "/src/gen8/Oniel_4.jpeg", correctAnswer: "Oniel", gen: "8" },
  { image: "/src/gen8/Oniel_5.jpeg", correctAnswer: "Oniel", gen: "8" },
  { image: "/src/gen8/Fiony_1.jpeg", correctAnswer: "Fiony", gen: "8" },
  { image: "/src/gen8/Fiony_2.jpeg", correctAnswer: "Fiony", gen: "8" },
  { image: "/src/gen8/Fiony_3.jpeg", correctAnswer: "Fiony", gen: "8" },
  { image: "/src/gen8/Fiony_4.jpeg", correctAnswer: "Fiony", gen: "8" },
  { image: "/src/gen8/Fiony_5.jpeg", correctAnswer: "Fiony", gen: "8" },
  { image: "/src/gen8/Flora_1.jpeg", correctAnswer: "Flora", gen: "8" },
  { image: "/src/gen8/Flora_2.jpeg", correctAnswer: "Flora", gen: "8" },
  { image: "/src/gen8/Flora_3.jpeg", correctAnswer: "Flora", gen: "8" },
  { image: "/src/gen8/Flora_4.jpeg", correctAnswer: "Flora", gen: "8" },
  { image: "/src/gen8/Flora_5.jpeg", correctAnswer: "Flora", gen: "8" },
  { image: "/src/gen8/Lulu_1.jpeg", correctAnswer: "Lulu", gen: "8" },
  { image: "/src/gen8/Lulu_2.jpeg", correctAnswer: "Lulu", gen: "8" },
  { image: "/src/gen8/Lulu_3.jpeg", correctAnswer: "Lulu", gen: "8" },
  { image: "/src/gen8/Lulu_4.jpeg", correctAnswer: "Lulu", gen: "8" },
  { image: "/src/gen8/Lulu_5.jpeg", correctAnswer: "Lulu", gen: "8" },
  { image: "/src/gen8/Adel_1.jpeg", correctAnswer: "Adel", gen: "8" },
  { image: "/src/gen8/Adel_2.jpeg", correctAnswer: "Adel", gen: "8" },
  { image: "/src/gen8/Adel_3.jpeg", correctAnswer: "Adel", gen: "8" },
  { image: "/src/gen8/Adel_4.jpeg", correctAnswer: "Adel", gen: "8" },
  { image: "/src/gen8/Adel_5.jpeg", correctAnswer: "Adel", gen: "8" },
  { image: "/src/gen9/Indah_1.jpeg", correctAnswer: "Indah", gen: "9" },
  { image: "/src/gen9/Indah_2.jpeg", correctAnswer: "Indah", gen: "9" },
  { image: "/src/gen9/Indah_3.jpeg", correctAnswer: "Indah", gen: "9" },
  { image: "/src/gen9/Indah_4.jpeg", correctAnswer: "Indah", gen: "9" },
  { image: "/src/gen9/Indah_5.jpeg", correctAnswer: "Indah", gen: "9" },
  { image: "/src/gen9/Kathrina_1.jpeg", correctAnswer: "Kathrina", gen: "9" },
  { image: "/src/gen9/Kathrina_2.jpeg", correctAnswer: "Kathrina", gen: "9" },
  { image: "/src/gen9/Kathrina_3.jpeg", correctAnswer: "Kathrina", gen: "9" },
  { image: "/src/gen9/Kathrina_4.jpeg", correctAnswer: "Kathrina", gen: "9" },
  { image: "/src/gen9/Kathrina_5.jpeg", correctAnswer: "Kathrina", gen: "9" },
  { image: "/src/gen9/Marsha_1.jpeg", correctAnswer: "Marsha", gen: "9" },
  { image: "/src/gen9/Marsha_2.jpeg", correctAnswer: "Marsha", gen: "9" },
  { image: "/src/gen9/Marsha_3.jpeg", correctAnswer: "Marsha", gen: "9" },
  { image: "/src/gen9/Marsha_4.jpeg", correctAnswer: "Marsha", gen: "9" },
  { image: "/src/gen9/Marsha_5.jpeg", correctAnswer: "Marsha", gen: "9" },
  { image: "/src/gen10/Amanda_1.jpeg", correctAnswer: "Amanda", gen: "10" },
  { image: "/src/gen10/Amanda_2.jpeg", correctAnswer: "Amanda", gen: "10" },
  { image: "/src/gen10/Amanda_3.jpeg", correctAnswer: "Amanda", gen: "10" },
  { image: "/src/gen10/Amanda_4.jpeg", correctAnswer: "Amanda", gen: "10" },
  { image: "/src/gen10/Amanda_5.jpeg", correctAnswer: "Amanda", gen: "10" },
  { image: "/src/gen10/Lia_1.jpeg", correctAnswer: "Lia", gen: "10" },
  { image: "/src/gen10/Lia_2.jpeg", correctAnswer: "Lia", gen: "10" },
  { image: "/src/gen10/Lia_3.jpeg", correctAnswer: "Lia", gen: "10" },
  { image: "/src/gen10/Lia_4.jpeg", correctAnswer: "Lia", gen: "10" },
  { image: "/src/gen10/Lia_5.jpeg", correctAnswer: "Lia", gen: "10" },
  { image: "/src/gen10/Callie_1.jpeg", correctAnswer: "Callie", gen: "10" },
  { image: "/src/gen10/Callie_2.jpeg", correctAnswer: "Callie", gen: "10" },
  { image: "/src/gen10/Callie_3.jpeg", correctAnswer: "Callie", gen: "10" },
  { image: "/src/gen10/Callie_4.jpeg", correctAnswer: "Callie", gen: "10" },
  { image: "/src/gen10/Callie_5.jpeg", correctAnswer: "Callie", gen: "10" },
  { image: "/src/gen10/Ella_1.jpeg", correctAnswer: "Ella", gen: "10" },
  { image: "/src/gen10/Ella_2.jpeg", correctAnswer: "Ella", gen: "10" },
  { image: "/src/gen10/Ella_3.jpeg", correctAnswer: "Ella", gen: "10" },
  { image: "/src/gen10/Ella_4.jpeg", correctAnswer: "Ella", gen: "10" },
  { image: "/src/gen10/Ella_5.jpeg", correctAnswer: "Ella", gen: "10" },
  { image: "/src/gen10/Indira_1.jpeg", correctAnswer: "Indira", gen: "10" },
  { image: "/src/gen10/Indira_2.jpeg", correctAnswer: "Indira", gen: "10" },
  { image: "/src/gen10/Indira_3.jpeg", correctAnswer: "Indira", gen: "10" },
  { image: "/src/gen10/Indira_4.jpeg", correctAnswer: "Indira", gen: "10" },
  { image: "/src/gen10/Indira_5.jpeg", correctAnswer: "Indira", gen: "10" },
  { image: "/src/gen10/Lyn_1.jpeg", correctAnswer: "Lyn", gen: "10" },
  { image: "/src/gen10/Lyn_2.jpeg", correctAnswer: "Lyn", gen: "10" },
  { image: "/src/gen10/Lyn_3.jpeg", correctAnswer: "Lyn", gen: "10" },
  { image: "/src/gen10/Lyn_4.jpeg", correctAnswer: "Lyn", gen: "10" },
  { image: "/src/gen10/Lyn_5.jpeg", correctAnswer: "Lyn", gen: "10" },
  { image: "/src/gen10/Raisha_1.jpeg", correctAnswer: "Raisha", gen: "10" },
  { image: "/src/gen10/Raisha_2.jpeg", correctAnswer: "Raisha", gen: "10" },
  { image: "/src/gen10/Raisha_3.jpeg", correctAnswer: "Raisha", gen: "10" },
  { image: "/src/gen10/Raisha_4.jpeg", correctAnswer: "Raisha", gen: "10" },
  { image: "/src/gen10/Raisha_5.jpeg", correctAnswer: "Raisha", gen: "10" },
  { image: "/src/gen11/Alya_1.jpeg", correctAnswer: "Alya", gen: "11" },
  { image: "/src/gen11/Alya_2.jpeg", correctAnswer: "Alya", gen: "11" },
  { image: "/src/gen11/Alya_3.jpeg", correctAnswer: "Alya", gen: "11" },
  { image: "/src/gen11/Alya_4.jpeg", correctAnswer: "Alya", gen: "11" },
  { image: "/src/gen11/Alya_5.jpeg", correctAnswer: "Alya", gen: "11" },
  { image: "/src/gen11/Anindya_1.jpeg", correctAnswer: "Anindya", gen: "11" },
  { image: "/src/gen11/Anindya_2.jpeg", correctAnswer: "Anindya", gen: "11" },
  { image: "/src/gen11/Anindya_3.jpeg", correctAnswer: "Anindya", gen: "11" },
  { image: "/src/gen11/Anindya_4.jpeg", correctAnswer: "Anindya", gen: "11" },
  { image: "/src/gen11/Anindya_5.jpeg", correctAnswer: "Anindya", gen: "11" },
  { image: "/src/gen11/Cathy_1.jpeg", correctAnswer: "Cathy", gen: "11" },
  { image: "/src/gen11/Cathy_2.jpeg", correctAnswer: "Cathy", gen: "11" },
  { image: "/src/gen11/Cathy_3.jpeg", correctAnswer: "Cathy", gen: "11" },
  { image: "/src/gen11/Cathy_4.jpeg", correctAnswer: "Cathy", gen: "11" },
  { image: "/src/gen11/Cathy_5.jpeg", correctAnswer: "Cathy", gen: "11" },
  { image: "/src/gen11/Elin_1.jpeg", correctAnswer: "Elin", gen: "11" },
  { image: "/src/gen11/Elin_2.jpeg", correctAnswer: "Elin", gen: "11" },
  { image: "/src/gen11/Elin_3.jpeg", correctAnswer: "Elin", gen: "11" },
  { image: "/src/gen11/Elin_4.jpeg", correctAnswer: "Elin", gen: "11" },
  { image: "/src/gen11/Elin_5.jpeg", correctAnswer: "Elin", gen: "11" },
  { image: "/src/gen11/Chelsea_1.jpeg", correctAnswer: "Chelsea", gen: "11" },
  { image: "/src/gen11/Chelsea_2.jpeg", correctAnswer: "Chelsea", gen: "11" },
  { image: "/src/gen11/Chelsea_3.jpeg", correctAnswer: "Chelsea", gen: "11" },
  { image: "/src/gen11/Chelsea_4.jpeg", correctAnswer: "Chelsea", gen: "11" },
  { image: "/src/gen11/Chelsea_5.jpeg", correctAnswer: "Chelsea", gen: "11" },
  { image: "/src/gen11/Cynthia_1.jpeg", correctAnswer: "Cynthia", gen: "11" },
  { image: "/src/gen11/Cynthia_2.jpeg", correctAnswer: "Cynthia", gen: "11" },
  { image: "/src/gen11/Cynthia_3.jpeg", correctAnswer: "Cynthia", gen: "11" },
  { image: "/src/gen11/Cynthia_4.jpeg", correctAnswer: "Cynthia", gen: "11" },
  { image: "/src/gen11/Cynthia_5.jpeg", correctAnswer: "Cynthia", gen: "11" },
  { image: "/src/gen11/Danella_1.jpeg", correctAnswer: "Danella", gen: "11" },
  { image: "/src/gen11/Danella_2.jpeg", correctAnswer: "Danella", gen: "11" },
  { image: "/src/gen11/Danella_3.jpeg", correctAnswer: "Danella", gen: "11" },
  { image: "/src/gen11/Danella_4.jpeg", correctAnswer: "Danella", gen: "11" },
  { image: "/src/gen11/Danella_5.jpeg", correctAnswer: "Danella", gen: "11" },
  { image: "/src/gen11/Daisy_1.jpeg", correctAnswer: "Daisy", gen: "11" },
  { image: "/src/gen11/Daisy_2.jpeg", correctAnswer: "Daisy", gen: "11" },
  { image: "/src/gen11/Daisy_3.jpeg", correctAnswer: "Daisy", gen: "11" },
  { image: "/src/gen11/Daisy_4.jpeg", correctAnswer: "Daisy", gen: "11" },
  { image: "/src/gen11/Daisy_5.jpeg", correctAnswer: "Daisy", gen: "11" },
  { image: "/src/gen11/Gendis_1.jpeg", correctAnswer: "Gendis", gen: "11" },
  { image: "/src/gen11/Gendis_2.jpeg", correctAnswer: "Gendis", gen: "11" },
  { image: "/src/gen11/Gendis_3.jpeg", correctAnswer: "Gendis", gen: "11" },
  { image: "/src/gen11/Gendis_4.jpeg", correctAnswer: "Gendis", gen: "11" },
  { image: "/src/gen11/Gendis_5.jpeg", correctAnswer: "Gendis", gen: "11" },
  { image: "/src/gen11/Gracie_1.jpeg", correctAnswer: "Gracie", gen: "11" },
  { image: "/src/gen11/Gracie_2.jpeg", correctAnswer: "Gracie", gen: "11" },
  { image: "/src/gen11/Gracie_3.jpeg", correctAnswer: "Gracie", gen: "11" },
  { image: "/src/gen11/Gracie_4.jpeg", correctAnswer: "Gracie", gen: "11" },
  { image: "/src/gen11/Gracie_5.jpeg", correctAnswer: "Gracie", gen: "11" },
  { image: "/src/gen11/Greesel_1.jpeg", correctAnswer: "Greesel", gen: "11" },
  { image: "/src/gen11/Greesel_2.jpeg", correctAnswer: "Greesel", gen: "11" },
  { image: "/src/gen11/Greesel_3.jpeg", correctAnswer: "Greesel", gen: "11" },
  { image: "/src/gen11/Greesel_4.jpeg", correctAnswer: "Greesel", gen: "11" },
  { image: "/src/gen11/Greesel_5.jpeg", correctAnswer: "Greesel", gen: "11" },
  { image: "/src/gen11/Jeane_1.jpeg", correctAnswer: "Jeane", gen: "11" },
  { image: "/src/gen11/Jeane_2.jpeg", correctAnswer: "Jeane", gen: "11" },
  { image: "/src/gen11/Jeane_3.jpeg", correctAnswer: "Jeane", gen: "11" },
  { image: "/src/gen11/Jeane_4.jpeg", correctAnswer: "Jeane", gen: "11" },
  { image: "/src/gen11/Jeane_5.jpeg", correctAnswer: "Jeane", gen: "11" },
  { image: "/src/gen11/Michie_1.jpeg", correctAnswer: "Michie", gen: "11" },
  { image: "/src/gen11/Michie_2.jpeg", correctAnswer: "Michie", gen: "11" },
  { image: "/src/gen11/Michie_3.jpeg", correctAnswer: "Michie", gen: "11" },
  { image: "/src/gen11/Michie_4.jpeg", correctAnswer: "Michie", gen: "11" },
  { image: "/src/gen11/Michie_5.jpeg", correctAnswer: "Michie", gen: "11" },
  { image: "/src/gen12/Aralie_1.jpeg", correctAnswer: "Aralie", gen: "12" },
  { image: "/src/gen12/Aralie_2.jpeg", correctAnswer: "Aralie", gen: "12" },
  { image: "/src/gen12/Aralie_3.jpeg", correctAnswer: "Aralie", gen: "12" },
  { image: "/src/gen12/Aralie_4.jpeg", correctAnswer: "Aralie", gen: "12" },
  { image: "/src/gen12/Aralie_5.jpeg", correctAnswer: "Aralie", gen: "12" },
  { image: "/src/gen12/Delynn_1.jpeg", correctAnswer: "Delynn", gen: "12" },
  { image: "/src/gen12/Delynn_2.jpeg", correctAnswer: "Delynn", gen: "12" },
  { image: "/src/gen12/Delynn_3.jpeg", correctAnswer: "Delynn", gen: "12" },
  { image: "/src/gen12/Delynn_4.jpeg", correctAnswer: "Delynn", gen: "12" },
  { image: "/src/gen12/Delynn_5.jpeg", correctAnswer: "Delynn", gen: "12" },
  { image: "/src/gen12/Shasa_1.jpeg", correctAnswer: "Shasa", gen: "12" },
  { image: "/src/gen12/Shasa_2.jpeg", correctAnswer: "Shasa", gen: "12" },
  { image: "/src/gen12/Shasa_3.jpeg", correctAnswer: "Shasa", gen: "12" },
  { image: "/src/gen12/Shasa_4.jpeg", correctAnswer: "Shasa", gen: "12" },
  { image: "/src/gen12/Shasa_5.jpeg", correctAnswer: "Shasa", gen: "12" },
  { image: "/src/gen12/Lana_1.jpeg", correctAnswer: "Lana", gen: "12" },
  { image: "/src/gen12/Lana_2.jpeg", correctAnswer: "Lana", gen: "12" },
  { image: "/src/gen12/Lana_3.jpeg", correctAnswer: "Lana", gen: "12" },
  { image: "/src/gen12/Lana_4.jpeg", correctAnswer: "Lana", gen: "12" },
  { image: "/src/gen12/Lana_5.jpeg", correctAnswer: "Lana", gen: "12" },
  { image: "/src/gen12/Erine_1.jpeg", correctAnswer: "Erine", gen: "12" },
  { image: "/src/gen12/Erine_2.jpeg", correctAnswer: "Erine", gen: "12" },
  { image: "/src/gen12/Erine_3.jpeg", correctAnswer: "Erine", gen: "12" },
  { image: "/src/gen12/Erine_4.jpeg", correctAnswer: "Erine", gen: "12" },
  { image: "/src/gen12/Erine_5.jpeg", correctAnswer: "Erine", gen: "12" },
  { image: "/src/gen12/Fritzy_1.jpeg", correctAnswer: "Fritzy", gen: "12" },
  { image: "/src/gen12/Fritzy_2.jpeg", correctAnswer: "Fritzy", gen: "12" },
  { image: "/src/gen12/Fritzy_3.jpeg", correctAnswer: "Fritzy", gen: "12" },
  { image: "/src/gen12/Fritzy_4.jpeg", correctAnswer: "Fritzy", gen: "12" },
  { image: "/src/gen12/Fritzy_5.jpeg", correctAnswer: "Fritzy", gen: "12" },
  { image: "/src/gen12/Lily_1.jpeg", correctAnswer: "Lily", gen: "12" },
  { image: "/src/gen12/Lily_2.jpeg", correctAnswer: "Lily", gen: "12" },
  { image: "/src/gen12/Lily_3.jpeg", correctAnswer: "Lily", gen: "12" },
  { image: "/src/gen12/Lily_4.jpeg", correctAnswer: "Lily", gen: "12" },
  { image: "/src/gen12/Lily_5.jpeg", correctAnswer: "Lily", gen: "12" },
  { image: "/src/gen12/Trisha_1.jpeg", correctAnswer: "Trisha", gen: "12" },
  { image: "/src/gen12/Trisha_2.jpeg", correctAnswer: "Trisha", gen: "12" },
  { image: "/src/gen12/Trisha_3.jpeg", correctAnswer: "Trisha", gen: "12" },
  { image: "/src/gen12/Trisha_4.jpeg", correctAnswer: "Trisha", gen: "12" },
  { image: "/src/gen12/Trisha_5.jpeg", correctAnswer: "Trisha", gen: "12" },
  { image: "/src/gen12/Moreen_1.jpeg", correctAnswer: "Moreen", gen: "12" },
  { image: "/src/gen12/Moreen_2.jpeg", correctAnswer: "Moreen", gen: "12" },
  { image: "/src/gen12/Moreen_3.jpeg", correctAnswer: "Moreen", gen: "12" },
  { image: "/src/gen12/Moreen_4.jpeg", correctAnswer: "Moreen", gen: "12" },
  { image: "/src/gen12/Moreen_5.jpeg", correctAnswer: "Moreen", gen: "12" },
  { image: "/src/gen12/Levi_1.jpeg", correctAnswer: "Levi", gen: "12" },
  { image: "/src/gen12/Levi_2.jpeg", correctAnswer: "Levi", gen: "12" },
  { image: "/src/gen12/Levi_3.jpeg", correctAnswer: "Levi", gen: "12" },
  { image: "/src/gen12/Levi_4.jpeg", correctAnswer: "Levi", gen: "12" },
  { image: "/src/gen12/Levi_5.jpeg", correctAnswer: "Levi", gen: "12" },
  { image: "/src/gen12/Nayla_1.jpeg", correctAnswer: "Nayla", gen: "12" },
  { image: "/src/gen12/Nayla_2.jpeg", correctAnswer: "Nayla", gen: "12" },
  { image: "/src/gen12/Nayla_3.jpeg", correctAnswer: "Nayla", gen: "12" },
  { image: "/src/gen12/Nayla_4.jpeg", correctAnswer: "Nayla", gen: "12" },
  { image: "/src/gen12/Nayla_5.jpeg", correctAnswer: "Nayla", gen: "12" },
  { image: "/src/gen12/Nachia_1.jpeg", correctAnswer: "Nachia", gen: "12" },
  { image: "/src/gen12/Nachia_2.jpeg", correctAnswer: "Nachia", gen: "12" },
  { image: "/src/gen12/Nachia_3.jpeg", correctAnswer: "Nachia", gen: "12" },
  { image: "/src/gen12/Nachia_4.jpeg", correctAnswer: "Nachia", gen: "12" },
  { image: "/src/gen12/Nachia_5.jpeg", correctAnswer: "Nachia", gen: "12" },
  { image: "/src/gen12/Oline_1.jpeg", correctAnswer: "Oline", gen: "12" },
  { image: "/src/gen12/Oline_2.jpeg", correctAnswer: "Oline", gen: "12" },
  { image: "/src/gen12/Oline_3.jpeg", correctAnswer: "Oline", gen: "12" },
  { image: "/src/gen12/Oline_4.jpeg", correctAnswer: "Oline", gen: "12" },
  { image: "/src/gen12/Oline_5.jpeg", correctAnswer: "Oline", gen: "12" },
  { image: "/src/gen12/Regie_1.jpeg", correctAnswer: "Regie", gen: "12" },
  { image: "/src/gen12/Regie_2.jpeg", correctAnswer: "Regie", gen: "12" },
  { image: "/src/gen12/Regie_3.jpeg", correctAnswer: "Regie", gen: "12" },
  { image: "/src/gen12/Regie_4.jpeg", correctAnswer: "Regie", gen: "12" },
  { image: "/src/gen12/Regie_5.jpeg", correctAnswer: "Regie", gen: "12" },
  { image: "/src/gen12/Ribka_1.jpeg", correctAnswer: "Ribka", gen: "12" },
  { image: "/src/gen12/Ribka_2.jpeg", correctAnswer: "Ribka", gen: "12" },
  { image: "/src/gen12/Ribka_3.jpeg", correctAnswer: "Ribka", gen: "12" },
  { image: "/src/gen12/Ribka_4.jpeg", correctAnswer: "Ribka", gen: "12" },
  { image: "/src/gen12/Ribka_5.jpeg", correctAnswer: "Ribka", gen: "12" },
  { image: "/src/gen12/Nala_1.jpeg", correctAnswer: "Nala", gen: "12" },
  { image: "/src/gen12/Nala_2.jpeg", correctAnswer: "Nala", gen: "12" },
  { image: "/src/gen12/Nala_3.jpeg", correctAnswer: "Nala", gen: "12" },
  { image: "/src/gen12/Nala_4.jpeg", correctAnswer: "Nala", gen: "12" },
  { image: "/src/gen12/Nala_5.jpeg", correctAnswer: "Nala", gen: "12" },
  { image: "/src/gen12/Kimmy_1.jpeg", correctAnswer: "Kimmy", gen: "12" },
  { image: "/src/gen12/Kimmy_2.jpeg", correctAnswer: "Kimmy", gen: "12" },
  { image: "/src/gen12/Kimmy_3.jpeg", correctAnswer: "Kimmy", gen: "12" },
  { image: "/src/gen12/Kimmy_4.jpeg", correctAnswer: "Kimmy", gen: "12" },
  { image: "/src/gen12/Kimmy_5.jpeg", correctAnswer: "Kimmy", gen: "12" },
];

const duplicatedQuizData = [...quizData, ...quizData];

for (let i = duplicatedQuizData.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [duplicatedQuizData[i], duplicatedQuizData[j]] = [
    duplicatedQuizData[j],
    duplicatedQuizData[i],
  ];
}

let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;
const totalQuestions = 20;

const fotoElement = document.getElementById("foto");
const choicesElements = document.querySelectorAll(".choice-btn");
const correctSpan = document.getElementById("correct");
const incorrectSpan = document.getElementById("incorrect");

function loadQuestion() {
  if (currentQuestion < totalQuestions) {
    const currentQuiz = duplicatedQuizData[currentQuestion];

    fotoElement.src = currentQuiz.image;

    const choices = generateRandomChoices(currentQuiz.correctAnswer);
    choicesElements.forEach((btn, index) => {
      btn.textContent = choices[index];
    });
  } else {
    quizCompleted();
  }
}

function generateRandomChoices(correctAnswer) {
  const choices = [];

  while (choices.length < 4) {
    const randomIndex = Math.floor(Math.random() * duplicatedQuizData.length);
    const randomChoice = duplicatedQuizData[randomIndex].correctAnswer;

    if (!choices.includes(randomChoice)) {
      choices.push(randomChoice);
    }
  }

  if (!choices.includes(correctAnswer)) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    choices[randomIndex] = correctAnswer;
  }

  return shuffleArray(choices);
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function checkAnswer(btn) {
  if (currentQuestion < totalQuestions) {
    const selectedAnswer = btn.textContent;
    const correctAnswer = duplicatedQuizData[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      correctCount++;
    } else {
      incorrectCount++;
    }

    currentQuestion++;

    loadQuestion();
    updateScore();
  } else {
    quizCompleted();
  }
}

function quizCompleted() {
  swal(
    "Selesai!",
    "Quiz completed! Total Benar: " +
      correctCount +
      ", Total Salah: " +
      incorrectCount,
    "success",
    {
      button: "Let's Go!",
    }
  ).then(() => {
    resetQuiz();
    loadQuestion();
  });
}

function updateScore() {
  correctSpan.textContent = correctCount;
  incorrectSpan.textContent = incorrectCount;
}

function resetQuiz() {
  currentQuestion = 0;
  correctCount = 0;
  incorrectCount = 0;
  updateScore();
}

loadQuestion();