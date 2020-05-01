import { Injectable } from "../helper/decorator/injection/injectable.decorator";
import { BaseTest, Testee } from "./base.test";

@Injectable()
export class TesteeTest extends BaseTest {

    public runAllTests() {
        this.test_shouldBe_string();
        this.test_shouldBe_number();
        this.test_shouldNotBe_number();
        this.test_shouldBe_object();
        this.test_shouldNotBe_object();
    }

    public test_shouldBe_string() {
        const value = "Test";
        const testee = new Testee(value);
        testee.should().be(value);
    }

    public test_shouldBe_number() {
        const value = 10;
        const testee = new Testee(value);
        testee.should().be(value);
    }

    public test_shouldNotBe_number() {
        const value = 10;
        const testee = new Testee(value);
        testee.should().notBe("10");
    }

    public test_shouldBe_object() {
        const value = {
            pNumber: 20,
            pString: "ObjTest"
        };
        const testee = new Testee(value);

        testee.should().be(value);
        testee.property("pNumber").should().be(value.pNumber);
        testee.property("pString").should().be(value.pString);
    }

    public test_shouldNotBe_object() {
        const value = {
            pNumber: 30,
            pString: "ObjTest2"
        };
        const testee = new Testee(value);

        testee.should().notBe({ pNumber: 40, pString: "ObjTest2"});
        testee.property("pNumber").should().notBe("30");
        testee.property("pString").should().notBe(true);
    }
}