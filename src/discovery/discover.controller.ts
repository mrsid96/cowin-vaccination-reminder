import utils from "../utils"

const getSlotsByPins = (req: Request) => {
    const { searchParams } = new URL(req.url)
    return utils.generateResponse({success: true, zips: searchParams.get("q")});
}

const getSlotsByDistricts = async (req: Request) => {
    const body = await req.json();
    return utils.generateResponse({success: true, body});
}

export = {
    getSlotsByPins,
    getSlotsByDistricts
}