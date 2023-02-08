import { classNames } from './classNames';
describe('classNames helper', () => {
    it("with className parameter only", () => {
        const result = classNames("test")
        expect(result).toBe("test")
    })
    it("with className and mode parameters", () => {
        const result = classNames("test", {"hovered": true, "selected": true})
        expect(result).toBe("test hovered selected")
    })
    it("with className, mode and additional classes", () => {
        const mode = {"hovered": true}
        const additionalClasses = ["subClass"]
        const result = classNames("test", mode, additionalClasses)
        expect(result).toBe("test hovered subClass")
    })
    it("with ", () => {
        const mode = {"hovered": true}
        const additionalClasses = ["subClass"]
        const result = classNames("test", mode, additionalClasses)
        expect(result).toBe("test hovered subClass")
    })
})
