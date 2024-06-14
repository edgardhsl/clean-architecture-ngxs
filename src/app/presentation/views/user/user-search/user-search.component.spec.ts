import { UserState } from "@/store/states/user.state";
import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { Store, provideStore } from "@ngxs/store";
import { of } from "rxjs";
import { UserSearchComponent } from "./user-search.component";

const mockUsers = [
    {
        "id": "01",
        "name": "Aiandra Alves",
        "email": "aiandraalves@tivic.com.br",
        "password": "Borboleta123@"
    },
    {
        "id": "02",
        "name": "Maone Barbosa",
        "email": "maone@tivic.com",
        "password": "Bola123@"
    },
]

describe("User Search Component", () => {
    let component: UserSearchComponent;
    let fixture: ComponentFixture<UserSearchComponent>;
    let store: Store;
    let router: Router;

    beforeEach(() => {
        const activatedRoute = {
            snapshot: {
                paramMap: {
                    get: jest.fn()
                }
            }
        };

        const storeMock = {
            dispatch: jest.fn().mockReturnValue(of(mockUsers)),
            selectSignal: jest.fn().mockReturnValue(of(mockUsers))
        };

        TestBed.configureTestingModule({
            providers: [
                provideStore([UserState]),
                provideHttpClient(),
                { provide: Router, useValue: { navigate: jest.fn() } },
                { provide: Store, useValue: storeMock },
                { provide: ActivatedRoute, useValue: activatedRoute }
            ]
        })
        fixture = TestBed.createComponent(UserSearchComponent);
        component = fixture.componentInstance;
        store = TestBed.inject(Store);
        router = TestBed.inject(Router);
    })

    // it("should create the user search component", () => {
    //     expect(component).toBeTruthy();
    // })
    
    // it("should be able find users", () => {
    //     store.dispatch(new FindUser()).subscribe(users => {
    //         expect(users).toEqual(mockUsers)
    //     })
    // })

    // it("should be able select signal users", () => {
    //     const users = store.selectSignal(UserState.users)
    //     expect(users).toBeTruthy()
    // })

    // it("should be able navigate to user edit page on onEdit", () => {
    //     const user = mockUsers[0];
    //     component.onEdit(user);
    //     expect(router.navigate).toHaveBeenCalledWith(["/usuarios", user.id]);
    // })
})