<?php
    namespace App\Controller;
    use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
    use Symfony\Component\Routing\Annotation\Route;
    use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

    use Symfony\Component\HttpFoundation\Response;
    use Symfony\Component\HttpFoundation\Request;
    use Symfony\Component\Form\Extension\Core\Type\TextType;
    use Symfony\Component\Form\Extension\Core\Type\IntegerType;
    use Symfony\Component\Form\Extension\Core\Type\EmailType;
    use Symfony\Component\Form\Extension\Core\Type\PasswordType;
    use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
    use Symfony\Component\Form\Extension\Core\Type\SubmitType;
    use Symfony\Bridge\Doctrine\Form\Type\EntityType;
    use Symfony\Component\Form\Extension\Core\Type\HiddenType;
    use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

    use App\Entity\Usuario;

    class SecurityController extends AbstractController {
        
        /**
         * @Route("/usuario/login", name="login", methods={"GET", "POST"})
         */

        public function login(AuthenticationUtils $authenticationUtils) {
            $error = $authenticationUtils->getLastAuthenticationError();
            $lastUsername = $authenticationUtils->getLastUsername();
            return $this->render('login.html.twig', [
                'last_username' => $lastUsername,
                'error' => $error,
            ]);
        }
        
        /**
         * @Route("/usuario/registrar", name="registrar")
         */
        public function registrar(Request $request, UserPasswordEncoderInterface $passwordEncoder) {
            $user = new Usuario();
            $formulario=$this->createFormBuilder($user)
                ->add('user', TextType::class, array('label' => 'Nombre de Usuario'))
                ->add('email', EmailType::class, array('label' => 'Email'))
                ->add('pass', RepeatedType::class, array(
                    'type' => PasswordType::class,
                    'first_options' => array('label' => 'Contraseña'),
                    'second_options' => array('label' => 'Repite la contraseña')
                    ))
                ->add('rol', HiddenType::class, array('empty_data' => 'ROLE_USER'))
                ->add('save', SubmitType::class, array('label' => 'Crear'))
                ->getForm();
            
            $formulario->handleRequest($request);

            if($formulario->isSubmitted() && $formulario->isValid()) {
                $user = $formulario->getData();
                //$password = $passwordEncoder->encodePassword($user, $user->getPass());
                $user->setPass($user->getPass());
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();
                return $this->redirectToRoute('usuarios');
            }

            return $this->render('nuevo_user.html.twig', array('formulario'=>$formulario->createView()));
        }
    }
?>