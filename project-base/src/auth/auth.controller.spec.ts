// Testes unitários para o AuthController usando Jest
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './dto/jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RolesGuard } from './roles.guard';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;
  // Mock do AuthService com funções simuladas
  const mockAuthService = {
    generateToken: jest.fn(),
    validateUser: jest.fn(),
    login: jest.fn(),
  };
  // Usuário simulado para os testes
  const mockUser = {
    id_usuario: 1,
    email: 'test@example.com',
    perfil: 'ADMIN',
    nome: 'Test User',
    senha: 'hashedPassword'
  };
  // Requisição simulada com o usuário mockado
  const mockRequest = {
    user: mockUser
  };

  beforeEach(async () => {
    // Configuração do módulo de testes
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: Reflector,
          useValue: {
            getAllAndOverride: jest.fn(),
          },
        },
      ],
    })
      // Sobrescreve guards para permitir acesso nos testes
      .overrideGuard(LocalAuthGuard)
      .useValue({
        canActivate: jest.fn(() => true),
      })
      .overrideGuard(JwtAuthGuard)
      .useValue({
        canActivate: jest.fn(() => true),
      })
      .overrideGuard(RolesGuard)
      .useValue({
        canActivate: jest.fn(() => true),
      })
      .compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpa os mocks após cada teste
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined(); // Garante que o controller foi criado
  });

  describe('login', () => {
    it('deve retornar o token de acesso e as informações do usuário no login bem-sucedido', async () => {
      // DTO de login simulado
      const loginDto = {
        email: 'test@example.com',
        senha: 'password123'
      };
      // Token esperado para o teste
      const expectedToken = {
        accessToken: 'jwt-token-here'
      };

      mockAuthService.generateToken.mockResolvedValue(expectedToken);

      const result = await controller.login(mockRequest, loginDto);
      // Verifica se o método generateToken foi chamado com o usuário
      expect(mockAuthService.generateToken).toHaveBeenCalledWith(mockUser);
      // Verifica a estrutura de retorno esperada
      expect(result).toEqual({
        ...expectedToken,
        user: {
          id: mockUser.id_usuario,
          email: mockUser.email,
          perfil: mockUser.perfil,
          nome: mockUser.nome
        }
      });
    });

    it('deve chamar authService.generateToken com o usuário correto', async () => {
      const loginDto = {
        email: 'test@example.com',
        senha: 'password123'
      };

      mockAuthService.generateToken.mockResolvedValue({
        accessToken: 'jwt-token'
      });

      await controller.login(mockRequest, loginDto);

      expect(mockAuthService.generateToken).toHaveBeenCalledWith(mockUser);
      expect(mockAuthService.generateToken).toHaveBeenCalledTimes(1);
    });
  });

  describe('getProfile', () => {
    it('deve retornar informações do perfil do usuário', () => {
      const result = controller.getProfile(mockRequest);

      expect(result).toEqual({
        id_usuario: mockUser.id_usuario,
        email: mockUser.email,
        perfil: mockUser.perfil,
        nome: mockUser.nome
      });
    });
  });

  describe('adminDashboard', () => {
    it('deve retornar mensagem do painel de administração com informações do usuário', () => {
      const result = controller.adminDashboard(mockRequest);

      expect(result).toEqual({
        message: 'Acesso ao painel administrativo da ONG',
        user: mockUser,
        permissions: ['manage_children', 'manage_volunteers', 'manage_reports']
      });
    });
  });

  describe('coordenadorDashboard', () => {
    it('should return coordenador dashboard message with user info', () => {
      const result = controller.coordenadorDashboard(mockRequest);

      expect(result).toEqual({
        message: 'Acesso ao painel de coordenação',
        user: mockUser,
        permissions: ['view_children', 'manage_activities', 'view_reports']
      });
    });
  });

  describe('voluntarioArea', () => {
    it('deve retornar mensagem do painel do coordenador com informações do usuário', () => {
      const result = controller.voluntarioArea(mockRequest);

      expect(result).toEqual({
        message: 'Área do voluntário',
        user: mockUser,
        permissions: ['view_assigned_children', 'mark_attendance']
      });
    });
  });

  describe('familiaArea', () => {
    it('deve retornar mensagem de área familiar com informações do usuário', () => {
      const result = controller.familiaArea(mockRequest);

      expect(result).toEqual({
        message: 'Área da família',
        user: mockUser,
        permissions: ['view_children_progress', 'update_family_info']
      });
    });
  });

  describe('Guards Integration', () => {
    it('deve ter LocalAuthguard no ponto de extremidade de login', () => {
      const loginMetadata = Reflect.getMetadata('__guards__', controller.login);
      expect(loginMetadata).toBeDefined();
    });

    it('deve ter JwtAuthGuard no endpoint protegidos', () => {
      const profileMetadata = Reflect.getMetadata('__guards__', controller.getProfile);
      const adminMetadata = Reflect.getMetadata('__guards__', controller.adminDashboard);
      const coordenadorMetadata = Reflect.getMetadata('__guards__', controller.coordenadorDashboard);

      expect(profileMetadata).toBeDefined();
      expect(adminMetadata).toBeDefined();
      expect(coordenadorMetadata).toBeDefined();
    });
  });

  describe('Tratamento de erros', () => {
    it('deve lidar com erros de authService durante o login', async () => {
      const loginDto = {
        email: 'test@example.com',
        senha: 'password123'
      };

      const error = new Error('Falha na autenticação');
      mockAuthService.generateToken.mockRejectedValue(error);

      await expect(controller.login(mockRequest, loginDto)).rejects.toThrow(error);
    });
  });

  describe('logout', () => {
    it('deve retornar mensagem de sucesso de logout', async () => {
      const result = await controller.logout(mockRequest);

      expect(result).toEqual({
        message: 'Logout realizado com sucesso'
      });
    });
  });
});