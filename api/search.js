export default async function handler(req, res) {
    try {
        // ดึง GAS URL จากตัวแปรลับ (Environment Variable) ที่เราจะไปตั้งค่าใน Vercel
        const gasUrl = process.env.GAS_URL; 
        
        const response = await fetch(gasUrl);
        const data = await response.json();
        
        // ส่งข้อมูลที่ได้กลับไปให้หน้าเว็บ
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
    }
}
