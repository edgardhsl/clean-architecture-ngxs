import { UserDTO, makeUser } from "@/data/dtos/user/user.dto";
import { CustomFormBuilder } from "@aiandralves/tivic-ui";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UserFormComponent } from "./user-form.component";

describe("User Form Component", () => {
    let component: UserFormComponent;
    let fixture: ComponentFixture<UserFormComponent>;
    let customFormBuilder: CustomFormBuilder<UserDTO>;

    beforeEach(() => {
        const activatedRoute = {
            snapshot: {
                paramMap: {
                    get: jest.fn()
                }
            }
        };

        const formGroupMock = new FormGroup({
            name: new FormControl(""),
            email: new FormControl(""),
            password: new FormControl(""),
            confirmPassword: new FormControl("")
        });

        const customFormBuilderMock = {
            create: jest.fn().mockReturnValue(formGroupMock),
            update: jest.fn(),
            setValidators: jest.fn()
        };

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            providers: [
                { provide: CustomFormBuilder, useValue: customFormBuilderMock },
                { provide: ActivatedRoute, useValue: activatedRoute }
            ]
        });

        fixture = TestBed.createComponent(UserFormComponent);
        component = fixture.componentInstance;
        customFormBuilder = TestBed.inject(CustomFormBuilder);
    });

    it("should create the user form component dumb", () => {
        expect(component).toBeTruthy();
    });

    it("should create formGroup", () => {
        const formGroup = component.formGroup;

        expect(customFormBuilder.create).toHaveBeenCalledWith(makeUser());
        expect(formGroup.value).toBeTruthy();
    });
});
