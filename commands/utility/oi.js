const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('oi')
		.setDescription('Bão?'),
	async execute(interaction){
		await interaction.reply('Oi!')
		}
}