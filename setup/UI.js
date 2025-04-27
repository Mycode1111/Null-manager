const { EmbedBuilder } = require("discord.js");

exports.PANEL = new EmbedBuilder()
	.setColor("#5413e2")
	.setImage("https://img5.pic.in.th/file/secure-sv1/img-superclient.png");

exports.FUNCTION = new EmbedBuilder()
	.setColor("#5413e2")
	.setImage("https://img5.pic.in.th/file/secure-sv1/img-function.png");

exports.TOS = new EmbedBuilder()
	.setAuthor({
		name: "ข้อตกลงการใช้บริการ (Terms of Service)",
	})
	.setTitle("วันที่มีผลบังคับใช้: [3/8/2024]")
	.setDescription(
		'ขอบคุณที่เลือกใช้ `XYOS SERVICE` ! กรุณาอ่านและทำความเข้าใจข้อตกลงการใช้บริการ (ต่อไปนี้เรียกว่า "ข้อตกลง") ฉบับนี้อย่างถี่ถ้วน ข้อตกลงนี้เป็นข้อกำหนดและเงื่อนไขที่มีผลบังคับใช้ในการเข้าถึงและการใช้บริการของเราซึ่งจัดทำโดย `LOYBUNG ALL` (ต่อไปนี้เรียกว่า "เรา" หรือ "บริษัท")\n\n1. **การยอมรับข้อตกลง**\nการเข้าถึงหรือการใช้บริการของคุณถือเป็นการยอมรับข้อตกลงนี้ หากคุณไม่ยอมรับข้อตกลงนี้ กรุณาหยุดการใช้บริการของเรา\n\n2. **การเปลี่ยนแปลงข้อตกลง**\nเราขอสงวนสิทธิ์ในการปรับเปลี่ยนข้อตกลงนี้เมื่อใดก็ได้ การเปลี่ยนแปลงดังกล่าวจะมีผลบังคับใช้ทันทีที่เราเผยแพร่ฉบับปรับปรุงบนเว็บไซต์ของเรา คุณต้องตรวจสอบข้อตกลงนี้เป็นระยะเพื่อให้แน่ใจว่าคุณรับทราบการเปลี่ยนแปลงใดๆ หากคุณใช้บริการต่อไปหลังจากที่มีการปรับเปลี่ยนข้อตกลงนี้ คุณจะถือว่ายอมรับการเปลี่ยนแปลงนั้น\n\n3. **ความเป็นส่วนตัว**\nเราให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้ เราไม่เก็บรวบรวมข้อมูลส่วนบุคคลจากผู้ใช้ของเรา ข้อมูลที่เกี่ยวข้องกับการใช้บริการของคุณจะถูกเก็บไว้เป็นความลับและจะไม่ถูกแชร์กับบุคคลที่สาม\n\n4. **การใช้งานบริการ**\nคุณยินยอมที่จะใช้งานบริการนี้ตามข้อกำหนดและเงื่อนไขที่กำหนดไว้ในข้อตกลงนี้ ห้ามใช้งานบริการในทางที่ผิดกฎหมายหรือขัดต่อข้อตกลงนี้\n\n5. **การเผยแพร่เนื้อหา**\nคุณตกลงที่จะไม่ทำการเผยแพร่ แก้ไข แบ่งปัน หรือใช้เนื้อหาใด ๆ จากบริการนี้ก่อนได้รับอนุญาตเป็นลายลักษณ์อักษรจากเรา เนื้อหาทั้งหมดในบริการนี้รวมถึงแต่ไม่จำกัดเพียง ข้อความ รูปภาพ กราฟิก วิดีโอ เสียง และสื่ออื่น ๆ ถือเป็นทรัพย์สินของเราและได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์\n\n6. **สิทธิ์ในทรัพย์สินทางปัญญา**\nเนื้อหาและข้อมูลทั้งหมดในบริการนี้เป็นทรัพย์สินทางปัญญาของเรา ห้ามทำซ้ำ แก้ไข หรือเผยแพร่โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากเรา\n\n7. **การจำกัดความรับผิดชอบ**\nบริการของเราให้บริการ "ตามสภาพ" และ "ตามที่มี" โดยไม่มีการรับประกันใด ๆ ทั้งสิ้น เราไม่รับผิดชอบต่อความเสียหายใด ๆ ที่อาจเกิดขึ้นจากการใช้บริการ\n\n8. **การแก้ไขข้อพิพาท**\nในกรณีที่เกิดข้อพิพาทใด ๆ เกี่ยวกับการใช้บริการ ข้อพิพาทนั้นจะได้รับการแก้ไขตามกฎหมายไทย การใช้บริการนี้ถือว่าคุณยอมรับเขตอำนาจศาลนี้\n\n9. **การติดต่อเรา**\nหากคุณมีคำถามหรือข้อกังวลเกี่ยวกับข้อตกลงนี้ กรุณาติดต่อเราได้ที่ [ข้อมูลการติดต่อ](https://fb.me/loybung)'
	)
	.setColor("#5413e2")
	.setImage(
		"https://img5.pic.in.th/file/secure-sv1/xyos-banner-information.png"
	);

exports.LOADING = new EmbedBuilder()
	.setColor("#5413e2")
	.setImage("https://img5.pic.in.th/file/secure-sv1/xyos-banner-loading.png");

exports.CONNECTING = new EmbedBuilder()
	.setColor("#5413e2")
	.setImage(
		"https://img5.pic.in.th/file/secure-sv1/xyos-banner-connecting.png"
	);
exports.DISCONNECTING = new EmbedBuilder()
	.setColor("#5413e2")
	.setImage("https://img2.pic.in.th/pic/xyos-banner-disconnecting.png");

exports.SUCCESS = new EmbedBuilder()
	.setColor("#57F287")
	.setImage("https://img2.pic.in.th/pic/xyos-banner-success.png");

exports.TRY_AGAIN = new EmbedBuilder()
	.setColor("#ED4245")
	.setImage("https://img2.pic.in.th/pic/xyos-image-try_again.png");

exports.ERROR = (message) => {
	const embed = new EmbedBuilder().setColor("#ED4245");

	const ErrorMessage = ["Unexpected", "config err"];
	if (message === "An invalid token was provided.") {
		embed.setImage("https://img2.pic.in.th/pic/xyos-image-invalid_token.png");
	} else if (ErrorMessage.some((err) => message.includes(err))) {
		embed.setImage(
			"https://img5.pic.in.th/file/secure-sv1/xyos-image-invalid_config.png"
		);
	} else {
		embed.setImage("https://img2.pic.in.th/pic/xyos-image-try_again.png");
	}

	return embed;
};

exports.LOG = (action, interaction) => {
	Timestamp = Math.floor(Date.now() / 1000);

	return new EmbedBuilder()
		.setFooter({
			text: `XYOS | Super Client Logs`,
		})
		.setAuthor({
			name: `Username: ${interaction.user.tag} | UID: ${interaction.user.id}`,
			iconURL: interaction.user.displayAvatarURL(),
		})
		.addFields({
			name: "Action",
			value: `\`User\` \`|\` ${interaction.user}\n\`Action\` \`|\` ${action}\n\`Timestamp\` \`|\` <t:${Timestamp}:R>`,
			inline: true,
		})
		.setColor("#5413e2")
		.setImage("https://singlecolorimage.com/get/5413e2/1000x10")
		.setTimestamp();
};
