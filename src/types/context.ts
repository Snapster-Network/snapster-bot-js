import { IGetMeAnswer, IUserMessageToBot } from "./message"
import { ISceneContext } from "./scene"

interface IBot extends IGetMeAnswer {
    token: string,
}

interface ICtx {
    bot: IBot,
    message: IUserMessageToBot,
    scene: ISceneContext,
    reply: (text: string) => void
}

export { IBot, ICtx }