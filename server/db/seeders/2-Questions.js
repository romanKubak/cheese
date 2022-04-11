'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Questions', [{
      text: 'Название этой нелетающей птицы из Австралии состоит из двух нот. Что это за птица?',
      answer: 'Додо',
      category_id: 1,
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Назовите самый известный балет П.И.Чайковского, посвященный птицам.',
      answer: 'Лебединое озеро',
      category_id: 1,
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Этого зверька, который любит поспать, Людвиг ванн Бетховен воспел в своей песне.',
      answer: 'Сурок',
      category_id: 1,
      point: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Из какого вечнозеленого дерева делают пианино и скрипки?',
      answer: 'Ель',
      category_id: 1,
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Этот музыкальный инструмент очень похож на огромное крыло бабочки. Что это за инструмент?',
      answer: 'Арфа',
      category_id: 1,
      point: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Что может путешествовать по миру, оставаясь в одном и том же углу?',
      answer: 'Почтовая марка на конверте',
      category_id: 2,
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Вы находитесь в самолете, перед вами лошадь, сзади вас - автомобиль. Где вы находитесь?',
      answer: 'На карусели',
      category_id: 2,
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Когда беззубый чувствует боль от зубов?',
      answer: 'Когда его укусила собака',
      category_id: 2,
      point: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Чем заканчивается ночь и день?',
      answer: 'Мягким знаком',
      category_id: 2,
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Как сорвать ветку, не спугнув птицу, которая на ней сидит?',
      answer: 'Подождать пока птица улетит',
      category_id: 2,
      point: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Какая страна первой запустила спутник?',
      answer: 'СССР',
      category_id: 3,
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Как назывался корабль, на котором 12 апреля 1961 года Юрий Гагарин совершил первый полёт в космос?',
      answer: 'Восток',
      category_id: 3,
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Что в переводе с греческого означает "комета"?',
      answer: 'Хвостатая звезда',
      category_id: 3,
      point: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Какие планеты солнечной системы вращаются в направлении, противоположном Земле?',
      answer: 'Венера и Уран',
      category_id: 3,
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Что является причиной образования кратеров на Луне?',
      answer: 'метеориты',
      category_id: 3,
      point: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
 /*------*/ },{
      text: 'В каком мультфильме прозвучала фраза «Птица-говорун отличается умом и сообразительностью»?',
      answer: 'Тайна третьей планеты',
      category_id: 4,
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Какой предмет потерял ежик в тумане в одноименном мультфильме?',
      answer: 'Узелок',
      category_id: 4,
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Какой советский персонаж стал прототипом японского мультипликационного героя Чеби?',
      answer: 'Чебурашка',
      category_id: 4,
      point: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Назовите полное имя почтальона из мультфильма «Трое из Простаквашино»',
      answer: 'Игорь Иванович Печкин',
      category_id: 4,
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Какой мультфильм считается первым полнометражным компьютерным мультфильмом',
      answer: 'История игрушек',
      category_id: 4,
      point: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      text: 'Какой сок собирается весной?',
      answer: 'Березовый',
      category_id: 5,
      point: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Что согласно пословице весенний день кормит?',
      answer: 'Год',
      category_id: 5,
      point: 400,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Когда на Земле наступает астрономическая весна?',
      answer: '21 марта',
      category_id: 5,
      point: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'В каком месяце наступает весна в Австралии?',
      answer: 'В сентябре',
      category_id: 5,
      point: 800,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      text: 'Наши предки считали появление этой птицы в апреле символом прихода весны',
      answer: 'Кукушка',
      category_id: 5,
      point: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
